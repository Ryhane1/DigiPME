package org.example.digipme.Mappers;

import org.example.digipme.DTOs.UserResponse;
import org.example.digipme.Model.Freelancer;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.UserApp;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public UserResponse toResponse(UserApp user) {
        UserResponse.UserResponseBuilder builder = UserResponse.builder()
                .id(user.getId())
                .nom(user.getNom())
                .email(user.getEmail())
                .telephone(user.getTelephone())
                .adresse(user.getAdresse())
                .role(user.getRole().name());

        if (user instanceof PME pme) {
            builder.rc(pme.getRC()).activite(pme.getActivite());
        } else if (user instanceof Freelancer f) {
            builder.specialite(f.getSpecialite()).noteMoyenne(f.getNoteMoyenne());
        }
        return builder.build();
    }
}