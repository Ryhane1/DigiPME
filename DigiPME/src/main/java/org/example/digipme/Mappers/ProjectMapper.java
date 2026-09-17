package org.example.digipme.Mappers;

import org.example.digipme.DTOs.ProjectRequest;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Model.Project;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProjectMapper {

    @Mapping(target = "dateCreation", source = "date")
    Project toEntity(ProjectRequest request);

    @Mapping(target = "date", source = "dateCreation")
    ProjectResponse toResponse(Project project);

    @Mapping(target = "dateCreation", source = "date")
    void updateEntity(ProjectRequest request, Project project);
}