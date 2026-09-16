package org.example.digipme.Controller;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.DTOs.PMERequest;
import org.example.digipme.DTOs.PMEResponse;
import org.example.digipme.Service.PMEService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pme")
@RequiredArgsConstructor
public class PMEController {

    private final PMEService pmeService;

    @GetMapping("/me")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<PMEResponse> getMyProfile(
            Authentication authentication
    ) {
        return ResponseEntity.ok(
                pmeService.getMyProfile(authentication)
        );
    }

    @PutMapping("/me")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<PMEResponse> updateMyProfile(
            @RequestBody PMERequest request,
            Authentication authentication
    ) {
        return ResponseEntity.ok(
                pmeService.updateMyProfile(request, authentication)
        );
    }

    @GetMapping("/projects/{projectId}/offers")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<Page<OfferResponse>> getProjectOffers(
            @PathVariable Long projectId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication
    ) {
        return ResponseEntity.ok(
                pmeService.getProjectOffers(
                        projectId,
                        page,
                        size,
                        authentication
                )
        );
    }

    @PutMapping("/offers/{offerId}/accept")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<OfferResponse> acceptOffer(
            @PathVariable Long offerId,
            Authentication authentication
    ) {
        return ResponseEntity.ok(
                pmeService.acceptOffer(
                        offerId,
                        authentication
                )
        );
    }
}