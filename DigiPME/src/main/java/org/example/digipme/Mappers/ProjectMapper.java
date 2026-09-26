package org.example.digipme.Mappers;

import org.example.digipme.DTOs.ProjectRequest;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Model.Project;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ProjectMapper {

    @Mapping(target = "dateCreation", source = "date")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "pme", ignore = true)
    @Mapping(target = "offers", ignore = true)
    Project toEntity(ProjectRequest request);

    @Mapping(target = "date", source = "dateCreation")
    ProjectResponse toResponse(Project project);

    @Mapping(target = "dateCreation", source = "date")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "pme", ignore = true)
    @Mapping(target = "offers", ignore = true)
    void updateEntity(ProjectRequest request, @MappingTarget Project project);
}