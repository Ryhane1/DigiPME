package org.example.digipme.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OfferResponse {

    private Long id;
    private String description;
    private Double prixProposer;
    private LocalDate dateLivraison;
    private Long projectId;
    private Long freelancerId;

}
