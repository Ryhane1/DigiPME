package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.ReviewRequest;
import org.example.digipme.DTOs.ReviewResponse;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Model.*;
import org.example.digipme.Repository.*;
import org.example.digipme.Mappers.ReviewMapper;
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
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserAppRepository userRepository;
    private final ProjectRepository projectRepository;
    private final OfferRepository offerRepository;

    private final ReviewMapper reviewMapper;


    @CacheEvict(value = "reviews", allEntries = true)
    public ReviewResponse createReview(
            ReviewRequest request,
            Authentication authentication
    ) {

        // Récupérer l'utilisateur connecté
        UserApp user = getCurrentUser(authentication);

        // Vérifier que c'est une PME
        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException(
                    "Seule une PME peut créer une review"
            );
        }


        // Vérifier le projet
        Project project = projectRepository
                .findById(request.getProjectId())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Projet introuvable avec l'id : "
                                        + request.getProjectId()
                        )
                );


        // Vérifier que le projet appartient à la PME
        if (!project.getPme().getId().equals(pme.getId())) {

            throw new AccessDeniedException(
                    "Ce projet ne vous appartient pas"
            );
        }


        // Vérifier que le freelancer existe
        UserApp freelancerUser = userRepository
                .findById(request.getFreelancerId())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Freelancer introuvable"
                        )
                );


        if (!(freelancerUser instanceof Freelancer freelancer)) {

            throw new RuntimeException(
                    "L'utilisateur sélectionné n'est pas un freelancer"
            );
        }


        // Vérifier que le freelancer a bien fait une offre
        boolean hasOffer = offerRepository
                .existsByProjectIdAndFreelancerId(
                        project.getId(),
                        freelancer.getId()
                );


        if (!hasOffer) {

            throw new AccessDeniedException(
                    "Vous ne pouvez pas évaluer ce freelancer " +
                            "car il n'a pas fait d'offre sur ce projet"
            );
        }


        // Vérifier si une review existe déjà
        boolean alreadyReviewed =
                reviewRepository.existsByProjectIdAndFreelancerId(
                        project.getId(),
                        freelancer.getId()
                );


        if (alreadyReviewed) {

            throw new RuntimeException(
                    "Vous avez déjà évalué ce freelancer pour ce projet"
            );
        }


        // Créer la review
        Review review = reviewMapper.toEntity(request);

        review.setPme(pme);
        review.setProject(project);
        review.setFreelancer(freelancer);


        Review savedReview =
                reviewRepository.save(review);


        return reviewMapper.toResponse(savedReview);
    }


    // =========================
    // CONSULTER UNE REVIEW
    // =========================

    @Cacheable(
            value = "reviews",
            key = "'id:' + #id"
    )
    public ReviewResponse getReviewById(Long id) {

        Review review = reviewRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Review introuvable avec l'id : "
                                        + id
                        )
                );

        return reviewMapper.toResponse(review);
    }


    // =========================
    // TOUTES LES REVIEWS
    // =========================

    @Cacheable(
            value = "reviews",
            key = "'page:' + #page + ':size:' + #size"
    )
    public Page<ReviewResponse> getAllReviews(
            int page,
            int size
    ) {

        Pageable pageable =
                PageRequest.of(page, size);

        return reviewRepository
                .findAll(pageable)
                .map(reviewMapper::toResponse);
    }


    // =========================
    // REVIEWS D'UN FREELANCER
    // =========================

    @Cacheable(
            value = "reviews",
            key = "'freelancer:' + #freelancerId + ':page:' + #page + ':size:' + #size" )
    public Page<ReviewResponse> getReviewsByFreelancer(
            Long freelancerId,
            int page,
            int size
    ) {

        // Vérifier que le freelancer existe
        UserApp user = userRepository
                .findById(freelancerId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Freelancer introuvable"
                        )
                );


        if (!(user instanceof Freelancer)) {

            throw new RuntimeException(
                    "L'utilisateur n'est pas un freelancer"
            );
        }


        Pageable pageable =
                PageRequest.of(page, size);


        return reviewRepository
                .findByFreelancerId(
                        freelancerId,
                        pageable)
                .map(reviewMapper::toResponse);
    }


    // =========================
    // SUPPRIMER UNE REVIEW
    // =========================

    @CacheEvict(
            value = "reviews",
            allEntries = true
    )
    public void deleteReview(
            Long id,
            Authentication authentication
    ) {

        UserApp user =
                getCurrentUser(authentication);


        Review review = reviewRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Review introuvable"
                        )
                );


        // ADMIN peut supprimer
        if (user.getRole() == RoleUser.ADMIN) {

            reviewRepository.delete(review);
            return;
        }


        // PME uniquement
        if (!(user instanceof PME pme)) {

            throw new AccessDeniedException(
                    "Accès refusé"
            );
        }


        // Vérifier que la review appartient à cette PME
        if (!review.getPme().getId().equals(pme.getId())) {

            throw new AccessDeniedException(
                    "Vous ne pouvez pas supprimer cette review"
            );
        }


        reviewRepository.delete(review);
    }




    private UserApp getCurrentUser(
            Authentication authentication
    ) {

        String email = authentication.getName();

        return userRepository
                .findUserAppByEmail(email);
    }
}