package org.example.digipme.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.ArrayList;
import java.util.List;

@Entity
@SuperBuilder
@DiscriminatorValue("PME")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PME extends UserApp {

    @NotBlank
    private String RC;
    @NotBlank
    private String activite ;

    @OneToMany(mappedBy = "pme")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @Builder.Default
    private List<Project> projects = new ArrayList<>();



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
