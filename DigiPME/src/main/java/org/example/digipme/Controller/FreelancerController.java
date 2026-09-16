package org.example.digipme.Controller;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.FreelancerRequest;
import org.example.digipme.DTOs.FreelancerResponse;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Service.FreelancerService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/freelancers")
@RequiredArgsConstructor
public class FreelancerController {

    private final FreelancerService freelancerService;


    @GetMapping("/me")
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<FreelancerResponse> getMyProfile(
            Authentication authentication
    ) {
        return ResponseEntity.ok(
                freelancerService.getMyProfile(authentication)
        );
    }


    @PutMapping("/me")
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<FreelancerResponse> updateMyProfile(
            @RequestBody FreelancerRequest request,
            Authentication authentication
    ) {
        return ResponseEntity.ok(
                freelancerService.updateMyProfile(
                        request,
                        authentication
                )
        );
    }


    @GetMapping("/projects")
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<Page<ProjectResponse>> getAvailableProjects(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        return ResponseEntity.ok(
                freelancerService.getAvailableProjects(
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
                freelancerService.getMyOffers(
                        page,
                        size,
                        authentication
                )
        );
    }
}