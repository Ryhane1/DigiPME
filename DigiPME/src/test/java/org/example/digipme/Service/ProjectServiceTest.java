package org.example.digipme.Service;

import org.example.digipme.DTOs.ProjectRequest;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Enums.ActiviteType;
import org.example.digipme.Enums.ProjectStatus;
import org.example.digipme.Mappers.ProjectMapper;
import org.example.digipme.Model.Freelancer;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.Project;
import org.example.digipme.Repository.ProjectRepository;
import org.example.digipme.Repository.UserAppRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;

import java.time.LocalDate;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProjectServiceTest {

    @Mock
    private ProjectRepository projectRepository;

    @Mock
    private UserAppRepository userRepository;

    @Mock
    private ProjectMapper projectMapper;

    @Mock
    private Authentication authentication;

    @InjectMocks
    private ProjectService projectService;

    private PME pme;
    private Project project;
    private ProjectRequest request;

    @BeforeEach
    void setUp() {
        pme = new PME();
        pme.setId(1L);
        pme.setNom("Digital Maroc SARL");
        pme.setEmail("contact@digitalmaroc.ma");

        project = Project.builder()
                .id(10L)
                .titre("Refonte site web")
                .type(ActiviteType.DEVELOPPEMENT_WEB)
                .prix(15000.0)
                .dateCreation(LocalDate.now())
                .status(ProjectStatus.EN_ATTENTE)
                .pme(pme)
                .build();

        request = ProjectRequest.builder()
                .titre("Refonte site web")
                .type(ActiviteType.DEVELOPPEMENT_WEB)
                .prix(15000.0)
                .date(LocalDate.now())
                .build();
    }

    @Test
    void createProject_devraitReussir_quandUtilisateurEstPME() {
        when(authentication.getName()).thenReturn(pme.getEmail());
        when(userRepository.findUserAppByEmail(pme.getEmail())).thenReturn(pme);
        when(projectMapper.toEntity(request)).thenReturn(project);
        when(projectRepository.save(any(Project.class))).thenReturn(project);
        when(projectMapper.toResponse(project)).thenReturn(
                ProjectResponse.builder().id(10L).titre("Refonte site web").build()
        );

        ProjectResponse response = projectService.createProject(request, authentication);

        assertThat(response).isNotNull();
        assertThat(response.getTitre()).isEqualTo("Refonte site web");
        verify(projectRepository, times(1)).save(any(Project.class));
    }

    @Test
    void createProject_devraitEchouer_quandUtilisateurNestPasPME() {
        Freelancer freelancer = new Freelancer();
        freelancer.setEmail("sara@mail.com");

        when(authentication.getName()).thenReturn(freelancer.getEmail());
        when(userRepository.findUserAppByEmail(freelancer.getEmail())).thenReturn(freelancer);

        assertThatThrownBy(() -> projectService.createProject(request, authentication))
                .isInstanceOf(AccessDeniedException.class)
                .hasMessageContaining("Seule une PME peut créer un projet");

        verify(projectRepository, never()).save(any());
    }

    @Test
    void getProjectById_devraitRetournerLeProjet_quandIlExiste() {
        when(projectRepository.findById(10L)).thenReturn(Optional.of(project));
        when(projectMapper.toResponse(project)).thenReturn(
                ProjectResponse.builder().id(10L).titre("Refonte site web").build()
        );

        ProjectResponse response = projectService.getProjectById(10L);

        assertThat(response.getId()).isEqualTo(10L);
    }

    @Test
    void getProjectById_devraitLeverUneException_quandLeProjetNexistePas() {
        when(projectRepository.findById(999L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> projectService.getProjectById(999L))
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining("Projet introuvable");
    }

}