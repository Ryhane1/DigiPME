package org.example.digipme.Controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.OfferRequest;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.Service.OfferService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/offers")
@RequiredArgsConstructor
public class OfferController {

    private final OfferService offerService;


    @PostMapping
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<OfferResponse> createOffer(
            @Valid @RequestBody OfferRequest request,
            Authentication authentication
    ) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(offerService.createOffer(request, authentication));
    }


    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Page<OfferResponse>> getAllOffers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        return ResponseEntity.ok(
                offerService.getAllOffers(page, size)
        );
    }


    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('PME', 'FREELANCER', 'ADMIN')")
    public ResponseEntity<OfferResponse> getOfferById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                offerService.getOfferById(id)
        );
    }

    @GetMapping("/project/{projectId}")
    @PreAuthorize("hasAnyRole('PME', 'ADMIN')")
    public ResponseEntity<Page<OfferResponse>> getOffersByProject(
            @PathVariable Long projectId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        return ResponseEntity.ok(
                offerService.getOffersByProject(
                        projectId,
                        page,
                        size
                )
        );
    }

    @GetMapping("/my-offers")
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<Page<OfferResponse>> getMyOffers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication
    ) {

        return ResponseEntity.ok(
                offerService.getMyOffers(page, size, authentication)
        );
    }


    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<Void> deleteOffer(
            @PathVariable Long id ,
            Authentication authentication
    ) {

        offerService.deleteOffer(id, authentication);

        return ResponseEntity.noContent().build();
    }
}