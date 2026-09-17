package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.Dashboard.FreelancerDashboardResponse;
import org.example.digipme.DTOs.FreelancerRequest;
import org.example.digipme.DTOs.FreelancerResponse;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Enums.OfferStatus;
import org.example.digipme.Mappers.FreelancerMapper;
import org.example.digipme.Mappers.OfferMapper;
import org.example.digipme.Mappers.ProjectMapper;
import org.example.digipme.Model.Freelancer;
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
public class FreelancerService {

    private final UserAppRepository userRepository;
    private final ProjectRepository projectRepository;
    private final OfferRepository offerRepository;
    private final ReviewRepository reviewRepository;
    private final FreelancerRepository freelancerRepository;

    private final FreelancerMapper freelancerMapper;
    private final OfferMapper offerMapper;
    private final ProjectMapper projectMapper;



    @Cacheable(value = "freelancer", key = "'profile:' + #authentication.name")
    public FreelancerResponse getMyProfile(Authentication authentication) {

        Freelancer freelancer = getCurrentFreelancer(authentication);
        return freelancerMapper.toResponse(freelancer);
    }




    @CacheEvict(value = "freelancer", key = "'profile:' + #authentication.name")
    public FreelancerResponse updateMyProfile(FreelancerRequest request,
                                               Authentication authentication) {
        Freelancer freelancer = getCurrentFreelancer(authentication);
        freelancerMapper.updateEntity(request, freelancer);
        Freelancer updated = userRepository.save(freelancer);

        return freelancerMapper.toResponse(updated);
    }


    @Cacheable(value = "projects",
               key = "'available:page:' + #page + ':size:' + #size")
    public Page<ProjectResponse> getAvailableProjects(int page, int size) {
        Pageable pageable =
                PageRequest.of(page, size);
        return projectRepository
                .findAll(pageable)
                .map(projectMapper::toResponse);
    }



    @Cacheable(value = "offers",
                key = "'freelancer:' + #authentication.name + ':page:' + #page + ':size:' + #size")
    public Page<OfferResponse> getMyOffers(int page, int size,
                                             Authentication authentication) {
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




    @Cacheable(value = "freelancer", key = "'dashboard:' + #authentication.name")
    public FreelancerDashboardResponse getDashboard(Authentication authentication) {

        Freelancer freelancer = getCurrentFreelancer(authentication);

        long disponibles = projectRepository.count();
        long envoyees = offerRepository.countByFreelancerId(freelancer.getId());
        long enCours = offerRepository.countByFreelancerIdAndStatus(freelancer.getId(), OfferStatus.ACCEPTEE);
        Double note = reviewRepository.findAverageNoteByFreelancerId(freelancer.getId());

        List<ProjectResponse> recommended = projectRepository
                .findTop5ByOrderByDateCreationDesc()
                .stream()
                .map(projectMapper::toResponse)
                .toList();

        List<OfferResponse> recentOffers = offerRepository
                .findTop5ByFreelancerIdOrderByIdDesc(freelancer.getId())
                .stream()
                .map(offerMapper::toResponse)
                .toList();

        return FreelancerDashboardResponse.builder()
                .profile(freelancerMapper.toResponse(freelancer))
                .projetsDisponibles(disponibles)
                .propositionsEnvoyees(envoyees)
                .missionsEnCours(enCours)
                .noteMoyenne(note)
                .recommendedProjects(recommended)
                .recentOffers(recentOffers)
                .build();
    }
}
