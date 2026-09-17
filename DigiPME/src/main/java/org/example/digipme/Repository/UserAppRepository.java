package org.example.digipme.Repository;

import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Model.UserApp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserAppRepository extends JpaRepository<UserApp, Long> {
    boolean findByEmail(String email);

    UserApp findUserAppByNom(String nom);

    UserApp findUserAppByEmail(String email);

    Page<UserApp> findByRole(RoleUser role, Pageable pageable);

    long countByRole(RoleUser role);

    List<UserApp> findTop5ByOrderByIdDesc();
}