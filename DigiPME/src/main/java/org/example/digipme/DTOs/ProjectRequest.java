package org.example.digipme.DTOs;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.Enums.ActiviteType;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectRequest {

    @NotBlank(message = "Le titre est obligatoire")
    private String titre;

    @NotNull(message = "Le type est obligatoire")
    private ActiviteType type;

    private String description;

    @NotNull(message = "Le prix est obligatoire")
    @PositiveOrZero(message = "Le prix doit être positif")
    private Double prix;

    @NotNull(message = "La date est obligatoire")
    private LocalDate date;
}
