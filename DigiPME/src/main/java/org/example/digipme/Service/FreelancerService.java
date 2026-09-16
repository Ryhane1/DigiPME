package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.FreelancerRequest;
import org.example.digipme.DTOs.FreelancerResponse;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Mappers.FreelancerMapper;
import org.example.digipme.Mappers.OfferMapper;
import org.example.digipme.Mappers.ProjectMapper;
import org.example.digipme.Model.Freelancer;
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
public class FreelancerService {

    private final UserAppRepository userRepository;
    private final ProjectRepository projectRepository;
    private final OfferRepository offerRepository;

    private final FreelancerMapper freelancerMapper;
    private final OfferMapper offerMapper;
    private final ProjectMapper projectMapper;



    @Cacheable(
            value = "freelancer",
            key = "'profile:' + #authentication.name"
    )
    public FreelancerResponse getMyProfile(
            Authentication authentication
    ) {

        Freelancer freelancer =
                getCurrentFreelancer(authentication);

        return freelancerMapper.toResponse(freelancer);
    }


    // =========================
    // MODIFIER PROFIL
    // =========================

    @CacheEvict(
            value = "freelancer",
            key = "'profile:' + #authentication.name"
    )
    public FreelancerResponse updateMyProfile(
            FreelancerRequest request,
            Authentication authentication
    ) {

        Freelancer freelancer =
                getCurrentFreelancer(authentication);

        freelancerMapper.updateEntity(
                request,
                freelancer
        );

        Freelancer updated =
                userRepository.save(freelancer);

        return freelancerMapper.toResponse(updated);
    }


    // =========================
    // PROJETS DISPONIBLES
    // =========================

    @Cacheable(
            value = "projects",
            key = "'available:page:' + #page + ':size:' + #size"
    )
    public Page<ProjectResponse> getAvailableProjects(
            int page,
            int size
    ) {

        Pageable pageable =
                PageRequest.of(page, size);

        return projectRepository
                .findAll(pageable)
                .map(projectMapper::toResponse);
    }


    // =========================
    // MES OFFRES
    // =========================

    @Cacheable(
            value = "offers",
            key = "'freelancer:' + #authentication.name + ':page:' + #page + ':size:' + #size"
    )
    public Page<OfferResponse> getMyOffers(
            int page,
            int size,
            Authentication authentication
    ) {

        Freelancer freelancer =
                getCurrentFreelancer(authentication);

        Pageable pageable =
                PageRequest.of(page, size);

        return offerRepository
                .findByFreelancerId(
                        freelancer.getId(),
                        pageable
                )
                .map(offerMapper::toResponse);
    }


    // =========================
    // UTILITAIRE
    // =========================

    private Freelancer getCurrentFreelancer(
            Authentication authentication
    ) {

        String email = authentication.getName();

        UserApp user = userRepository
                .findUserAppByEmail(email);

        if (!(user instanceof Freelancer freelancer)) {
            throw new AccessDeniedException(
                    "Vous devez être un freelancer"
            );
        }

        return freelancer;
    }
}
