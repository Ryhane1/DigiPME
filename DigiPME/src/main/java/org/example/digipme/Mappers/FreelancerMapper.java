package org.example.digipme.Mappers;

import org.example.digipme.DTOs.FreelancerRequest;
import org.example.digipme.DTOs.FreelancerResponse;
import org.example.digipme.Model.Freelancer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface FreelancerMapper {
    Freelancer toEntity(FreelancerRequest request);
    FreelancerResponse toResponse(Freelancer freelancer);

    void updateEntity(FreelancerRequest request, Freelancer freelancer);
}


