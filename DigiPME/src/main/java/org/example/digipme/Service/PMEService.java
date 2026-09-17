package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.*;
import org.example.digipme.DTOs.Dashboard.PMEDashboardResponse;
import org.example.digipme.Enums.OfferStatus;
import org.example.digipme.Enums.ProjectStatus;
import org.example.digipme.Mappers.OfferMapper;
import org.example.digipme.Mappers.PMEMapper;
import org.example.digipme.Mappers.ProjectMapper;
import org.example.digipme.Model.Offer;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.Project;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Repository.*;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PMEService {

    private final UserAppRepository userRepository;
    private final ProjectRepository projectRepository;
    private final OfferRepository offerRepository;
    private final FreelancerRepository freelancerRepository;
    private final ReviewRepository reviewRepository;

    private final PMEMapper pmeMapper;
    private final OfferMapper offerMapper;
    private final ProjectMapper projectMapper;


    @Cacheable(value = "pme", key = "'profile:' + #authentication.name")
    public PMEResponse getMyProfile(Authentication authentication) {
        PME pme = getCurrentPME(authentication);
        return pmeMapper.toResponse(pme);
    }



    @CacheEvict(value = "pme", key = "'profile:' + #authentication.name")
    public PMEResponse updateMyProfile(PMERequest request,
                                        Authentication authentication) {
        PME pme = getCurrentPME(authentication);
        pmeMapper.updateEntity(request, pme);
        PME updatedPME = userRepository.save(pme);
        return pmeMapper.toResponse(updatedPME);
    }


    @Cacheable(value = "offers",
               key = "'pme-project:' + #projectId + ':page:' + #page + ':size:' + #size")
    public Page<OfferResponse> getProjectOffers(Long projectId, int page, int size,
                                                 Authentication authentication) {
        PME pme = getCurrentPME(authentication);
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Projet introuvable"));
        if (!project.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException("Ce projet ne vous appartient pas");
        }
        Pageable pageable = PageRequest.of(page, size);
        return offerRepository
                .findByProjectId(projectId, pageable)
                .map(offerMapper::toResponse);
    }


    @Cacheable(value = "freelancersList", key = "'page:' + #page + ':size:' + #size")
    public Page<FreelancerResponse> getFreelancers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        return freelancerRepository.findAll(pageable)
                .map(f -> FreelancerResponse.builder()
                        .id(f.getId())
                        .nom(f.getNom())
                        .specialite(f.getSpecialite())
                        .telephone(f.getTelephone())
                        .adresse(f.getAdresse())
                        .noteMoyenne(reviewRepository.findAverageNoteByFreelancerId(f.getId()))
                        .build());
    }




    @CacheEvict(value = {"offers", "pme", "freelancer"}, allEntries = true)
    public OfferResponse acceptOffer(
            Long offerId,
            Authentication authentication
    ) {
        PME pme = getCurrentPME(authentication);
        Offer offer = offerRepository.findById(offerId)
                .orElseThrow(() -> new RuntimeException("Offre introuvable"));
        Project project = offer.getProject();
        if (!project.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException("Vous ne pouvez pas accepter cette offre");
        }
        offer.setStatus(OfferStatus.ACCEPTEE);
        project.getOffers().forEach(o -> {
            if (!o.getId().equals(offerId)) {
                o.setStatus(OfferStatus.REFUSEE);
                offerRepository.save(o);
            }
        });
        Offer updatedOffer = offerRepository.save(offer);

//        List<Offer> otherOffers = offerRepository.findByProjectId(project.getId(), Pageable.unpaged()).getContent();
//        otherOffers.stream()
//                .filter(o -> !o.getId().equals(offer.getId()))
//                .filter(o -> o.getStatus() == OfferStatus.EN_ATTENTE)
//                .forEach(o -> {
//                    o.setStatus(OfferStatus.REFUSEE);
//                    offerRepository.save(o);
//                });

        project.setStatus(ProjectStatus.EN_COURS);
        projectRepository.save(project);
        return offerMapper.toResponse(updatedOffer);
    }



    private PME getCurrentPME(
            Authentication authentication) {
        String email = authentication.getName();
        UserApp user = userRepository.findUserAppByEmail(email);
        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException("Vous devez être une PME");}
        return pme;
    }


    @Cacheable(value = "pme", key = "'dashboard:' + #authentication.name")
    public PMEDashboardResponse getDashboard(Authentication authentication) {

        PME pme = getCurrentPME(authentication);

        long total = projectRepository.countByPmeId(pme.getId());
        long enCours = projectRepository.countByPmeIdAndStatus(pme.getId(), ProjectStatus.EN_COURS);
        long termines = projectRepository.countByPmeIdAndStatus(pme.getId(), ProjectStatus.TERMINE);
        long totalOffres = offerRepository.countByProject_Pme_Id(pme.getId());

        List<ProjectResponse> recentProjects = projectRepository
                .findTop5ByPmeIdOrderByDateCreationDesc(pme.getId())
                .stream()
                .map(projectMapper::toResponse)
                .toList();

        return PMEDashboardResponse.builder()
                .profile(pmeMapper.toResponse(pme))
                .totalProjets(total)
                .projetsEnCours(enCours)
                .projetsTermines(termines)
                .totalOffresRecues(totalOffres)
                .recentProjects(recentProjects)
                .build();
    }
}