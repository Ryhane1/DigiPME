package org.example.digipme.Controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.ReviewRequest;
import org.example.digipme.DTOs.ReviewResponse;
import org.example.digipme.Service.ReviewService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;


    // =========================
    // CREER UNE REVIEW
    // =========================

    @PostMapping
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<ReviewResponse> createReview(
            @Valid @RequestBody ReviewRequest request,
            Authentication authentication
    ) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        reviewService.createReview(
                                request,
                                authentication
                        )
                );
    }


    // =========================
    // CONSULTER UNE REVIEW
    // =========================

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('PME', 'FREELANCER', 'ADMIN')")
    public ResponseEntity<ReviewResponse> getReviewById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                reviewService.getReviewById(id)
        );
    }


    // =========================
    // TOUTES LES REVIEWS
    // =========================

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Page<ReviewResponse>> getAllReviews(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        return ResponseEntity.ok(
                reviewService.getAllReviews(page, size)
        );
    }


    // =========================
    // REVIEWS D'UN FREELANCER
    // =========================

    @GetMapping("/freelancer/{freelancerId}")
    @PreAuthorize("hasAnyRole('PME', 'FREELANCER', 'ADMIN')")
    public ResponseEntity<Page<ReviewResponse>> getReviewsByFreelancer(
            @PathVariable Long freelancerId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        return ResponseEntity.ok(
                reviewService.getReviewsByFreelancer(
                        freelancerId,
                        page,
                        size
                )
        );
    }


    // =========================
    // SUPPRIMER UNE REVIEW
    // =========================

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('PME', 'ADMIN')")
    public ResponseEntity<Void> deleteReview(
            @PathVariable Long id,
            Authentication authentication
    ) {

        reviewService.deleteReview(
                id,
                authentication
        );

        return ResponseEntity.noContent().build();
    }
}
