package org.example.digipme.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewResponse {
    private Long id;
    private Long note;
    private String commentaire;
    private Long projectId;
    private Long pmeId;
    private Long freelancerId;
}
