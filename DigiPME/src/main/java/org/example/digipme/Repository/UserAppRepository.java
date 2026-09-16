package org.example.digipme.Repository;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Model.UserApp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.nio.channels.FileChannel;

public interface UserAppRepository extends JpaRepository<UserApp,Long> {
    boolean findByEmail(@NotBlank @Email String email);

    UserApp findUserAppByNom(@NotBlank String nom);

    UserApp findUserAppByEmail(@NotBlank @Email String email);

    Page<UserApp> findByRole(RoleUser role, Pageable pageable);
}
