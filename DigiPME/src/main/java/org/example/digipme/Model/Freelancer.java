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
@DiscriminatorValue("FREELANCER")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Freelancer extends UserApp{


    @NotBlank
    private String specialite ;

    private Double noteMoyenne;

    @OneToMany(mappedBy = "freelancer")
    @OnDelete(action = OnDeleteAction.CASCADE)
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
