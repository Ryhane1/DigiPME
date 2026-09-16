package org.example.digipme.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PMEResponse {

    private Long id;
    private String nom;
    private String rc;
    private String email;
    private String telephone;
    private String adresse;
    private String activite;
}