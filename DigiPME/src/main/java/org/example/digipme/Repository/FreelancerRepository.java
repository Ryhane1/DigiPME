package org.example.digipme.Repository;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.example.digipme.Model.Freelancer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FreelancerRepository extends JpaRepository<Freelancer, Long> {
    boolean findByEmail(@NotBlank @Email String email);
}
