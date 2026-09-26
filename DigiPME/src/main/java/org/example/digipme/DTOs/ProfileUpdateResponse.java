package org.example.digipme.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.Enums.RoleUser;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProfileUpdateResponse {
    private UserResponse user;
    private String token;
}