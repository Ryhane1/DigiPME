package org.example.digipme.Controller;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.ProjectRequest;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Service.ProjectService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @PostMapping
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<ProjectResponse> createProject(
            @RequestBody ProjectRequest request,
            Authentication authentication
    ) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(projectService.createProject(request, authentication));
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('PME', 'FREELANCER', 'ADMIN')")
    public ResponseEntity<Page<ProjectResponse>> getAllProjects(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        return ResponseEntity.ok(
                projectService.getAllProjects(page, size)
        );
    }


    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('PME', 'FREELANCER', 'ADMIN')")
    public ResponseEntity<ProjectResponse> getProjectById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                projectService.getProjectById(id)
        );
    }


    @GetMapping("/my-projects")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<Page<ProjectResponse>> getMyProjects(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication
    ) {

        return ResponseEntity.ok(
                projectService.getMyProjects(page, size, authentication)
        );
    }


    @PutMapping("/{id}")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<ProjectResponse> updateProject(
            @PathVariable Long id,
            @RequestBody ProjectRequest request,
            Authentication authentication
    ) {

        return ResponseEntity.ok(
                projectService.updateProject(id, request, authentication)
        );
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('PME', 'ADMIN')")
    public ResponseEntity<Void> deleteProject(
            @PathVariable Long id,
            Authentication authentication
    ) {

        projectService.deleteProject(id, authentication);

        return ResponseEntity.noContent().build();
    }
}

