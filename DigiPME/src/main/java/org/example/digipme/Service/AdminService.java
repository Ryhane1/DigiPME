package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.Dashboard.AdminDashboardResponse;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Mappers.ProjectMapper;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Repository.ProjectRepository;
import org.example.digipme.Repository.UserAppRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserAppRepository userRepository;
    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;

    public AdminDashboardResponse getDashboard() {

        long totalUsers = userRepository.count();
        long totalPME = userRepository.countByRole(RoleUser.PME);
        long totalFreelancers = userRepository.countByRole(RoleUser.FREELANCER);
        long totalProjects = projectRepository.count();

        List<AdminDashboardResponse.UserSummary> recentUsers = userRepository
                .findTop5ByOrderByIdDesc()
                .stream()
                .map(this::toSummary)
                .toList();

        List<ProjectResponse> recentProjects = projectRepository
                .findTop5ByOrderByDateCreationDesc()
                .stream()
                .map(projectMapper::toResponse)
                .toList();

        return AdminDashboardResponse.builder()
                .totalUsers(totalUsers)
                .totalPME(totalPME)
                .totalFreelancers(totalFreelancers)
                .totalProjects(totalProjects)
                .recentUsers(recentUsers)
                .recentProjects(recentProjects)
                .build();
    }

    private AdminDashboardResponse.UserSummary toSummary(UserApp user) {
        return AdminDashboardResponse.UserSummary.builder()
                .id(user.getId())
                .nom(user.getNom())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }
}