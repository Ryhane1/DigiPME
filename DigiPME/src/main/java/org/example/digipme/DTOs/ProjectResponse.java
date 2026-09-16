package org.example.digipme.DTOs;

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
public class ProjectResponse {

    private Long id;
    private String titre;
    private ActiviteType type;
    private String description;
    private Double prix;
    private LocalDate date;
}