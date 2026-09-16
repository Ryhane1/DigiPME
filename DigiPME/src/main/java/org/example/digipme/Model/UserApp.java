package org.example.digipme.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.Enums.RoleUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Builder
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type", discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue("ADMIN")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserApp implements UserDetails {
        @Id
        @GeneratedValue
        private Long id;
        @NotBlank
        private String nom;
        @NotBlank
        @Email
        @Column(unique = true)
        private String email;
        @NotBlank
        private String password;
        @NotBlank
        private String telephone;
        private String adresse;

        @Enumerated(EnumType.STRING)
        private RoleUser role;

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
                return List.of(
                        new SimpleGrantedAuthority("ROLE_" + role.name())
                );
        }

        @Override
        public String getUsername() {
                return email;
        }

}
