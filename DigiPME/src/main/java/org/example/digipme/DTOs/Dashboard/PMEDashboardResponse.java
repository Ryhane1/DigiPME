package org.example.digipme.DTOs.Dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.DTOs.PMEResponse;
import org.example.digipme.DTOs.ProjectResponse;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PMEDashboardResponse {

    private PMEResponse profile;

    private long totalProjets;
    private long projetsEnCours;
    private long projetsTermines;
    private long totalOffresRecues;

    private List<ProjectResponse> recentProjects;
}