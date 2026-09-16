package org.example.digipme.Mappers;

import org.example.digipme.DTOs.UserRequest;
import org.example.digipme.DTOs.UserResponse;
import org.example.digipme.Model.UserApp;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserApp toEntity(UserRequest request);

    UserResponse toResponse(UserApp userApp);
}
