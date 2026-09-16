package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.Model.Freelancer;
import org.example.digipme.Model.Offer;
import org.example.digipme.Model.Project;
import org.example.digipme.DTOs.OfferRequest;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.Mappers.OfferMapper;
import org.example.digipme.Repository.OfferRepository;
import org.example.digipme.Repository.ProjectRepository;
import org.example.digipme.Repository.UserAppRepository;
import org.example.digipme.Model.UserApp;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OfferService {

    private final OfferRepository offerRepository;
    private final ProjectRepository projectRepository;
    private final UserAppRepository userRepository;
    private final OfferMapper offerMapper;


    @CacheEvict(value = "offers", allEntries = true)
    public OfferResponse createOffer(
            OfferRequest request,
            Authentication authentication) {

        UserApp user = getCurrentUser(authentication);
        if (!(user instanceof Freelancer freelancer)) {
            throw new AccessDeniedException(
                    "Seul un freelancer peut créer une offre"
            );
        }
        Project project = projectRepository
                .findById(request.getProjectId())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Projet introuvable avec l'id : "
                                        + request.getProjectId()
                        ));

        Offer offer = offerMapper.toEntity(request);
        offer.setProject(project);
        offer.setFreelancer(freelancer);
        Offer savedOffer = offerRepository.save(offer);
        return offerMapper.toResponse(savedOffer);
    }


    @Cacheable(value = "offers", key = "'page:' + #page + ':size:' + #size")
    public Page<OfferResponse> getAllOffers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return offerRepository
                .findAll(pageable)
                .map(offerMapper::toResponse);
    }


    @Cacheable(value = "offers", key = "'id:' + #id")
    public OfferResponse getOfferById(Long id) {
        Offer offer = offerRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Offre introuvable avec l'id : " + id
                        ));
        return offerMapper.toResponse(offer);
    }


    @Cacheable(value = "offers",
            key = "'project:' + #projectId + ':page:' + #page + ':size:' + #size")
    public Page<OfferResponse> getOffersByProject(Long projectId, int page, int size) {
        if (!projectRepository.existsById(projectId)) {
            throw new RuntimeException(
                    "Projet introuvable avec l'id : " + projectId
            );
        }
        Pageable pageable = PageRequest.of(page, size);
        return offerRepository
                .findByProjectId(projectId, pageable)
                .map(offerMapper::toResponse);
    }


    public Page<OfferResponse> getMyOffers( int page, int size, Authentication authentication) {
        UserApp user = getCurrentUser(authentication);
        if (!(user instanceof Freelancer freelancer)) {
            throw new AccessDeniedException(
                    "Seul un freelancer peut consulter ses offres"
            );
        }
        Pageable pageable = PageRequest.of(page, size);
        return offerRepository
                .findByFreelancerId(freelancer.getId(), pageable)
                .map(offerMapper::toResponse);
    }


    @CacheEvict(value = "offers", allEntries = true)
    public void deleteOffer( Long id, Authentication authentication) {
        UserApp user = getCurrentUser(authentication);
        if (!(user instanceof Freelancer freelancer)) {
            throw new AccessDeniedException(
                    "Seul un freelancer peut supprimer une offre"
            );
        }
        Offer offer = offerRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Offre introuvable avec l'id : " + id
                        )
                );
        if (!offer.getFreelancer()
                .getId()
                .equals(freelancer.getId())) {
            throw new AccessDeniedException(
                    "Vous ne pouvez pas supprimer cette offre"
            );
        }
        offerRepository.delete(offer);
    }


    private UserApp getCurrentUser(Authentication authentication) {
        String email = authentication.getName();
        return userRepository.findUserAppByEmail(email);

    }
}