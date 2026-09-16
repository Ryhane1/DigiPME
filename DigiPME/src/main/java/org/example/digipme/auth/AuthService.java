package org.example.digipme.auth;

import lombok.RequiredArgsConstructor;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Model.Freelancer;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Repository.PMERepository;
import org.example.digipme.Repository.FreelancerRepository;
import org.example.digipme.Repository.UserAppRepository;
import org.example.digipme.auth.dto.UserLogin;
import org.example.digipme.auth.dto.TokenResponse;
import org.example.digipme.auth.dto.UserSignUp;
import org.example.digipme.security.CustomUserDetailsService;
import org.example.digipme.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserAppRepository userAppRepository;
    private final JwtService jwtService;
    private final PasswordEncoder motdePasseEncoder;
    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService customUserDetailsService;
    private final FreelancerRepository freelancerRepository;
    private final PMERepository pmeRepository;

     public TokenResponse register(UserSignUp userSignUp){
         if(userAppRepository.findUserAppByNom(userSignUp.getNom()) != null){
             throw new RuntimeException("Nom déjà utilisé");
         }
         if (userAppRepository.findUserAppByEmail(userSignUp.getEmail())!=null){
             throw new RuntimeException("Email déjà utilisé");
         }
         isEmailRegistered(userSignUp);

         if (userSignUp.getRole() == RoleUser.PME){
             PME pme = new PME();
             pme.setNom(userSignUp.getNom());
             pme.setEmail(userSignUp.getEmail());
             pme.setPassword(motdePasseEncoder.encode(userSignUp.getPassword()));
             pme.setTelephone(userSignUp.getTelephone());
             pme.setAdresse(userSignUp.getAdresse());
             pme.setRole(RoleUser.PME);
             pme.setRC(userSignUp.getRC());
             pme.setActivite(userSignUp.getActivite());
             pmeRepository.save(pme);

             UserDetails userDetails = customUserDetailsService.loadUserByUsername(pme.getEmail());
             String token = jwtService.generateToken(userDetails);
             return new TokenResponse(token);
         } else if (userSignUp.getRole() == RoleUser.ADMIN) {
             UserApp User = new UserApp();
             User.setNom(userSignUp.getNom());
             User.setEmail(userSignUp.getEmail());
             User.setPassword(motdePasseEncoder.encode(userSignUp.getPassword()));
             User.setTelephone(userSignUp.getTelephone());
             User.setAdresse(userSignUp.getAdresse());
             User.setRole(RoleUser.ADMIN);
             userAppRepository.save(User);

             UserDetails userDetails = customUserDetailsService.loadUserByUsername(User.getEmail());
             String token = jwtService.generateToken(userDetails);
             return new TokenResponse(token);
         } else {
             Freelancer freelancer = new Freelancer();
             freelancer.setNom(userSignUp.getNom());
             freelancer.setEmail(userSignUp.getEmail());
             freelancer.setPassword(motdePasseEncoder.encode(userSignUp.getPassword()));
             freelancer.setTelephone(userSignUp.getTelephone());
             freelancer.setAdresse(userSignUp.getAdresse());
             freelancer.setRole(RoleUser.FREELANCER);
             freelancer.setSpecialite(userSignUp.getSpecialite());
             freelancerRepository.save(freelancer);

             UserDetails userDetails = customUserDetailsService.loadUserByUsername(freelancer.getEmail());
             String token = jwtService.generateToken(userDetails);
             return new TokenResponse(token);
         }
     }

    public TokenResponse login(UserLogin userLogin) {
        UserApp user = userAppRepository.findUserAppByEmail(userLogin.getEmail());
        if (user == null || !motdePasseEncoder.matches(userLogin.getPassword(), user.getPassword())) {
            throw new RuntimeException("Email ou mot de passe incorrect");
        }
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(user.getEmail());
        String token = jwtService.generateToken(userDetails);
        return new TokenResponse(token);
    }

    public TokenResponse authenticat(String nom, String password) {
        UserApp userApp = userAppRepository.findUserAppByNom(nom);
        if (userApp == null || !motdePasseEncoder.matches(password, userApp.getPassword())) {
            throw new RuntimeException("Nom ou mot de passe incorrect");
        }
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(userApp.getNom());
        return new TokenResponse(jwtService.generateToken(userDetails));
    }

    public TokenResponse loginBYNom(UserLogin request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(), request.getPassword())
        );
        UserDetails userDetails =
                (UserDetails) authentication.getPrincipal();
        String token = jwtService.generateToken(userDetails);
        return new TokenResponse(token);
    }


    public void isEmailRegistered(UserSignUp userSignUp) {
        if(userAppRepository.findByEmail(userSignUp.getEmail())){
            throw new RuntimeException("Email déjà utilisé");
        }
        if(pmeRepository.findByEmail(userSignUp.getEmail())){
            throw new RuntimeException("Email déjà utilisé par une PME");
        }
        if(freelancerRepository.findByEmail(userSignUp.getEmail())){
            throw new RuntimeException("Email déjà utilisé par un Freelancer");
        }
    }


}
