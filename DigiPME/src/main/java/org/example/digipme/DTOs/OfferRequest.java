package org.example.digipme.DTOs;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OfferRequest {

    @NotBlank(message = "La description est obligatoire")
    private String description;

    @NotNull(message = "Le prix proposé est obligatoire")
    @PositiveOrZero(message = "Le prix doit être positif")
    private Double prixProposer;

    @NotNull(message = "La date de livraison est obligatoire")
    private LocalDate dateLivraison;

    @NotNull(message = "Le projet est obligatoire")
    private Long projectId;

}
