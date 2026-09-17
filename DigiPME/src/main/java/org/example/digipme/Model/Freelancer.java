package org.example.digipme.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@DiscriminatorValue("FREELANCER")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Freelancer extends UserApp{


    @NotBlank
    private String specialite ;

    private Double noteMoyenne;

    @OneToMany(mappedBy = "freelancer")
    @Builder.Default
    private List<Offer> offers = new ArrayList<>();





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
