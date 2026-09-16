package org.example.digipme.auth;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.digipme.auth.dto.UserLogin;
import org.example.digipme.auth.dto.TokenResponse;
import org.example.digipme.auth.dto.UserSignUp;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<TokenResponse> register(@Valid @RequestBody UserSignUp userSignUp) {
        TokenResponse response = authService.register(userSignUp);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<TokenResponse> login(@Valid @RequestBody UserLogin userLogin) {
        TokenResponse response = authService.login(userLogin);
        return ResponseEntity.ok(response);
    }

}
