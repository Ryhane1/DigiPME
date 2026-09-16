package org.example.digipme.Repository;

import org.example.digipme.Model.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.nio.channels.FileChannel;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    Page<Project> findByPmeId(Long id, Pageable pageable);
}
