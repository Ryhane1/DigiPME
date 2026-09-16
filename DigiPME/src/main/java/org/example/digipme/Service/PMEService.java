package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.DTOs.PMERequest;
import org.example.digipme.DTOs.PMEResponse;
import org.example.digipme.Enums.OfferStatus;
import org.example.digipme.Mappers.OfferMapper;
import org.example.digipme.Mappers.PMEMapper;
import org.example.digipme.Model.Offer;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.Project;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Repository.OfferRepository;
import org.example.digipme.Repository.ProjectRepository;
import org.example.digipme.Repository.UserAppRepository;
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
public class PMEService {

    private final UserAppRepository userRepository;
    private final ProjectRepository projectRepository;
    private final OfferRepository offerRepository;

    private final PMEMapper pmeMapper;
    private final OfferMapper offerMapper;


    @Cacheable(value = "pme", key = "'profile:' + #authentication.name"
    )
    public PMEResponse getMyProfile(
            Authentication authentication
    ) {

        PME pme = getCurrentPME(authentication);

        return pmeMapper.toResponse(pme);
    }



    @CacheEvict(
            value = "pme",
            key = "'profile:' + #authentication.name"
    )
    public PMEResponse updateMyProfile(
            PMERequest request,
            Authentication authentication
    ) {

        PME pme = getCurrentPME(authentication);

        pmeMapper.updateEntity(request, pme);

        PME updatedPME = userRepository.save(pme);

        return pmeMapper.toResponse(updatedPME);
    }


    @Cacheable(
            value = "offers",
            key = "'pme-project:' + #projectId + ':page:' + #page + ':size:' + #size"
    )
    public Page<OfferResponse> getProjectOffers(
            Long projectId,
            int page,
            int size,
            Authentication authentication
    ) {

        PME pme = getCurrentPME(authentication);

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Projet introuvable"
                        )
                );

        // Vérifier que le projet appartient bien à cette PME
        if (!project.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException(
                    "Ce projet ne vous appartient pas"
            );
        }

        Pageable pageable = PageRequest.of(page, size);

        return offerRepository
                .findByProjectId(projectId, pageable)
                .map(offerMapper::toResponse);
    }



    @CacheEvict(
            value = "offers",
            allEntries = true
    )
    public OfferResponse acceptOffer(
            Long offerId,
            Authentication authentication
    ) {

        PME pme = getCurrentPME(authentication);

        Offer offer = offerRepository.findById(offerId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Offre introuvable"
                        )
                );

        Project project = offer.getProject();

        // Vérifier que le projet appartient à la PME
        if (!project.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException(
                    "Vous ne pouvez pas accepter cette offre"
            );
        }

        offer.setStatus(OfferStatus.ACCEPTEE);

        Offer updatedOffer = offerRepository.save(offer);

        return offerMapper.toResponse(updatedOffer);
    }

    private PME getCurrentPME(
            Authentication authentication
    ) {

        String email = authentication.getName();

        UserApp user = userRepository
                .findUserAppByEmail(email);

        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException(
                    "Vous devez être une PME"
            );
        }

        return pme;
    }
}