package org.example.digipme.DTOs;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewRequest {

    @NotNull
    private Long note;
    @NotBlank
    private String commentaire;

    @NotNull(message = "Le projet est obligatoire")
    private Long projectId;

    @NotNull(message = "Le freelancer est obligatoire")
    private Long freelancerId;


}
