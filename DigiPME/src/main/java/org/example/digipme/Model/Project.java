package org.example.digipme.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.example.digipme.Enums.ActiviteType;
import org.example.digipme.Enums.ProjectStatus;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String titre;
    @NotNull
    @Enumerated(EnumType.STRING)
    private ActiviteType type ;
    private String description;
    @NotNull
    private Double prix;
    @NotNull
    private LocalDate dateCreation;
    @Enumerated(EnumType.STRING)
    private ProjectStatus status;

    @ManyToOne
    @JoinColumn(name = "pme_id")
    private PME pme;

    @OneToMany(
            mappedBy = "project",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    @Builder.Default
    private List<Offer> offers = new ArrayList<>();

}
