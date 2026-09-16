package org.example.digipme.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Builder
@DiscriminatorValue("PME")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PME extends UserApp {

    @NotBlank
    private String RC;
    @NotBlank
    private String activite ;

    @OneToMany(mappedBy = "pme")
    private List<Project> projects;



//    @Id
//    @GeneratedValue
//    private Long id;
//    @NotBlank
//    private String nom;
//    @NotBlank
//    @Email
//    private String email;
//    @NotBlank
//    private String password;
//    @NotBlank
//    private String telephone;
//    private String adresse;



}
