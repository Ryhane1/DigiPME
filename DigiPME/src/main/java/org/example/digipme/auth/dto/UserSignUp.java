package org.example.digipme.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.Enums.RoleUser;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserSignUp {

    @NotBlank
    private String nom;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    @Size(min = 4)
    private String password;
    @NotBlank
    private String telephone;
    private String adresse;

    private RoleUser role;

    private String RC;
    private String activite ;

    private String specialite ;






}
