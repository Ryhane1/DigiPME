package org.example.digipme.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private Long id;
    private String nom;
    private String email;
    private String telephone;
    private String adresse;
    private String role;

    private String rc;
    private String activite;
    private String specialite;
    private Double noteMoyenne;
}
