package org.example.digipme.Repository;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.example.digipme.Model.PME;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PMERepository extends JpaRepository<PME,Long> {
    boolean existsByEmail(@NotBlank @Email String email);
}
