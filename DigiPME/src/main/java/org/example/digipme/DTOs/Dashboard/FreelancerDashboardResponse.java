package org.example.digipme.DTOs.Dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.DTOs.FreelancerResponse;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.DTOs.ProjectResponse;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FreelancerDashboardResponse {

    private FreelancerResponse profile;

    private long projetsDisponibles;
    private long propositionsEnvoyees;
    private long missionsEnCours;
    private Double noteMoyenne;

    private List<ProjectResponse> recommendedProjects;
    private List<OfferResponse> recentOffers;
}