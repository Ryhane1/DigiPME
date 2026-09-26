package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.ProfileUpdateResponse;
import org.example.digipme.DTOs.UserRequest;
import org.example.digipme.DTOs.UserResponse;
import org.example.digipme.DTOs.UserUpdateRequest;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Mappers.UserMapper;
import org.example.digipme.Model.Freelancer;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Repository.UserAppRepository;
import org.example.digipme.exception.ApiException;
import org.example.digipme.security.CustomUserDetailsService;
import org.example.digipme.security.JwtService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserAppRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final CustomUserDetailsService userDetailsService;

    // =====================================================
    //  PROFIL (utilisateur connecté, tous rôles)
    // =====================================================

    public UserResponse getMyProfile(Authentication authentication) {
        return userMapper.toResponse(getCurrentUser(authentication));
    }

    @Transactional
    public ProfileUpdateResponse updateMyProfile(UserUpdateRequest request,
                                                 Authentication authentication) {
        UserApp user = getCurrentUser(authentication);
        String oldEmail = user.getEmail();

        applyUpdates(user, request);   // le mot de passe est volontairement ignoré ici
        UserApp saved = userRepository.save(user);

        String newToken = null;
        if (!oldEmail.equals(saved.getEmail())) {
            UserDetails details = userDetailsService.loadUserByUsername(saved.getEmail());
            newToken = jwtService.generateToken(details);
        }
        return new ProfileUpdateResponse(userMapper.toResponse(saved), newToken);
    }

    // =====================================================
    //  ADMIN
    // =====================================================

    public Page<UserResponse> getAllUsers(int page, int size) {
        return userRepository.findAll(pageable(page, size)).map(userMapper::toResponse);
    }

    public UserResponse getUserById(Long id) {
        return userMapper.toResponse(findOrThrow(id));
    }

    public Page<UserResponse> getUsersByRole(RoleUser role, int page, int size) {
        return userRepository.findByRole(role, pageable(page, size)).map(userMapper::toResponse);
    }

    @Transactional
    public UserResponse addUser(UserRequest request) {
        checkEmailAvailable(request.getEmail(), null);
        checkNomAvailable(request.getNom(), null);

        UserApp user;
        switch (request.getRole()) {
            case PME -> {
                requireText(request.getRc(), "Le RC est obligatoire pour une PME");
                requireText(request.getActivite(), "L'activité est obligatoire pour une PME");
                PME pme = new PME();
                pme.setRC(request.getRc());
                pme.setActivite(request.getActivite());
                user = pme;
            }
            case FREELANCER -> {
                requireText(request.getSpecialite(), "La spécialité est obligatoire pour un freelancer");
                Freelancer freelancer = new Freelancer();
                freelancer.setSpecialite(request.getSpecialite());
                user = freelancer;
            }
            default -> user = new UserApp();   // ADMIN
        }

        user.setNom(request.getNom());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setTelephone(request.getTelephone());
        user.setAdresse(request.getAdresse());
        user.setRole(request.getRole());

        return userMapper.toResponse(userRepository.save(user));
    }

    @Transactional
    public UserResponse updateUser(Long id, UserUpdateRequest request) {
        UserApp user = findOrThrow(id);
        applyUpdates(user, request);

        String newPassword = request.getPassword();
        if (newPassword != null && !newPassword.isBlank()) {
            if (newPassword.length() < 4) {
                throw new ApiException(HttpStatus.BAD_REQUEST,
                        "Le mot de passe doit contenir au moins 4 caractères");
            }
            user.setPassword(passwordEncoder.encode(newPassword));
        }
        return userMapper.toResponse(userRepository.save(user));
    }

    @Transactional
    public void deleteUser(Long id, Authentication authentication) {
        UserApp user = findOrThrow(id);
        if (user.getEmail().equals(authentication.getName())) {
            throw new ApiException(HttpStatus.CONFLICT,
                    "Vous ne pouvez pas supprimer votre propre compte");
        }
        userRepository.delete(user);
    }

    // =====================================================
    //  Helpers
    // =====================================================

    /** Champs communs + champs propres au type (PME / Freelancer). Le rôle n'est jamais modifié. */
    private void applyUpdates(UserApp user, UserUpdateRequest request) {
        checkEmailAvailable(request.getEmail(), user.getId());
        checkNomAvailable(request.getNom(), user.getId());

        user.setNom(request.getNom());
        user.setEmail(request.getEmail());
        user.setTelephone(request.getTelephone());
        user.setAdresse(request.getAdresse());

        if (user instanceof PME pme) {
            requireText(request.getRc(), "Le RC est obligatoire");
            requireText(request.getActivite(), "L'activité est obligatoire");
            pme.setRC(request.getRc());
            pme.setActivite(request.getActivite());
        } else if (user instanceof Freelancer freelancer) {
            requireText(request.getSpecialite(), "La spécialité est obligatoire");
            freelancer.setSpecialite(request.getSpecialite());
        }
    }

    private UserApp getCurrentUser(Authentication authentication) {
        UserApp user = userRepository.findUserAppByEmail(authentication.getName());
        if (user == null) {
            throw new ApiException(HttpStatus.NOT_FOUND, "Utilisateur introuvable");
        }
        return user;
    }

    private UserApp findOrThrow(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND,
                        "Utilisateur introuvable avec l'id : " + id));
    }

    private void checkEmailAvailable(String email, Long currentId) {
        UserApp existing = userRepository.findUserAppByEmail(email);
        if (existing != null && !existing.getId().equals(currentId)) {
            throw new ApiException(HttpStatus.CONFLICT, "Cet email est déjà utilisé");
        }
    }

    // AuthService.register() refuse déjà les noms en double : on reste cohérent
    private void checkNomAvailable(String nom, Long currentId) {
        UserApp existing = userRepository.findUserAppByNom(nom);
        if (existing != null && !existing.getId().equals(currentId)) {
            throw new ApiException(HttpStatus.CONFLICT, "Ce nom est déjà utilisé");
        }
    }

    private void requireText(String value, String message) {
        if (value == null || value.isBlank()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, message);
        }
    }

    private Pageable pageable(int page, int size) {
        return PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "id"));
    }
}