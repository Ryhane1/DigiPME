package org.example.digipme.Repository;

import org.example.digipme.Enums.ProjectStatus;
import org.example.digipme.Model.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    Page<Project> findByPmeId(Long id, Pageable pageable);

    long countByPmeId(Long pmeId);
    long countByPmeIdAndStatus(Long pmeId, ProjectStatus status);

    List<Project> findTop5ByPmeIdOrderByDateCreationDesc(Long pmeId);
    List<Project> findTop5ByOrderByDateCreationDesc();
}