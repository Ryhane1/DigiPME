package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.UserRequest;
import org.example.digipme.DTOs.UserResponse;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Mappers.UserMapper;
import org.example.digipme.Repository.UserAppRepository;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserAppRepository userRepository;
    private final UserMapper userMapper;



    @Cacheable(value = "users", key = "'page:' + #page + ':size:' + #size")
    public Page<UserResponse> getAllUsers(int page, int size) {

        Pageable pageable = PageRequest.of(page, size);

        return userRepository.findAll(pageable)
                .map(userMapper::toResponse);
    }


    @Cacheable(value = "users", key = "'id:' + #id")
    public UserResponse getUserById(Long id) {

        UserApp user = userRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Utilisateur introuvable avec l'id : " + id)
                );

        return userMapper.toResponse(user);
    }


    @Cacheable(value = "users", key = "'role:' + #role + ':page:' + #page + ':size:' + #size")
    public Page<UserResponse> getUsersByRole(
            RoleUser role, int page, int size) {

        Pageable pageable = PageRequest.of(page, size);

        return userRepository.findByRole(role, pageable)
                .map(userMapper::toResponse);
    }


    @CacheEvict(value = "users", allEntries = true)
    public void deleteUser(Long id) {

        if (!userRepository.existsById(id)) {
            throw new RuntimeException(
                    "Utilisateur introuvable avec l'id : " + id
            );}
        userRepository.deleteById(id);
    }

    public UserResponse addUser(UserRequest userRequest) {

        UserApp user = userMapper.toEntity(userRequest);
        return userMapper.toResponse(userRepository.save(user));
    }
}
