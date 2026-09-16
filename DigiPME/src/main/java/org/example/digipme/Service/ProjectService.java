package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.Project;
import org.example.digipme.Model.UserApp;
import org.example.digipme.DTOs.ProjectRequest;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Mappers.ProjectMapper;
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
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final UserAppRepository userRepository;
    private final ProjectMapper projectMapper;


    @CacheEvict(value = "projects", allEntries = true)
    public ProjectResponse createProject(
            ProjectRequest request,
            Authentication authentication
    ) {

        UserApp user = getCurrentUser(authentication);

        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException(
                    "Seule une PME peut créer un projet"
            );
        }

        Project project = projectMapper.toEntity(request);

        project.setPme(pme);

        Project savedProject = projectRepository.save(project);

        return projectMapper.toResponse(savedProject);
    }

    @Cacheable(
            value = "projects",
            key = "'page:' + #page + ':size:' + #size"
    )
    public Page<ProjectResponse> getAllProjects(
            int page,
            int size
    ) {

        Pageable pageable = PageRequest.of(page, size);

        return projectRepository
                .findAll(pageable)
                .map(projectMapper::toResponse);
    }


    // =========================
    // GET PROJECT BY ID
    // =========================

    @Cacheable(
            value = "projects",
            key = "'id:' + #id"
    )
    public ProjectResponse getProjectById(Long id) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Projet introuvable avec l'id : " + id
                        )
                );

        return projectMapper.toResponse(project);
    }


    // =========================
    // GET MY PROJECTS
    // =========================

    public Page<ProjectResponse> getMyProjects(
            int page,
            int size,
            Authentication authentication
    ) {

        UserApp user = getCurrentUser(authentication);

        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException(
                    "Seule une PME peut consulter ses projets"
            );
        }

        Pageable pageable = PageRequest.of(page, size);

        return projectRepository
                .findByPmeId(pme.getId(), pageable)
                .map(projectMapper::toResponse);
    }


    @CacheEvict(value = "projects", allEntries = true)
    public ProjectResponse updateProject(
            Long id,
            ProjectRequest request,
            Authentication authentication
    ) {

        UserApp user = getCurrentUser(authentication);

        Project project = projectRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Projet introuvable avec l'id : " + id
                        )
                );

        if (user.getRole().name().equals("ADMIN")) {

            projectMapper.updateEntity(request, project);

        } else {

            if (!(user instanceof PME pme)) {
                throw new AccessDeniedException(
                        "Accès refusé"
                );
            }

            if (!project.getPme().getId().equals(pme.getId())) {
                throw new AccessDeniedException(
                        "Vous ne pouvez pas modifier ce projet"
                );
            }

            projectMapper.updateEntity(request, project);
        }
        Project updatedProject = projectRepository.save(project);
        return projectMapper.toResponse(updatedProject);
    }


    @CacheEvict(value = "projects", allEntries = true)
    public void deleteProject(
            Long id,
            Authentication authentication
    ) {
        UserApp user = getCurrentUser(authentication);
        Project project = projectRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Projet introuvable avec l'id : " + id
                        )
                );

        if (user.getRole().name().equals("ADMIN")) {
            projectRepository.delete(project);
            return;
        }

        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException(
                    "Accès refusé"
            );
        }

        if (!project.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException(
                    "Vous ne pouvez pas supprimer ce projet"
            );
        }
        projectRepository.delete(project);
    }


    private UserApp getCurrentUser(Authentication authentication) {
        String email = authentication.getName();
        return userRepository.findUserAppByEmail(email);

    }
}
