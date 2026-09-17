package org.example.digipme.DTOs.Dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Enums.RoleUser;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminDashboardResponse {

    private long totalUsers;
    private long totalPME;
    private long totalFreelancers;
    private long totalProjects;

    private List<UserSummary> recentUsers;
    private List<ProjectResponse> recentProjects;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UserSummary {
        private Long id;
        private String nom;
        private String email;
        private RoleUser role;
    }
}