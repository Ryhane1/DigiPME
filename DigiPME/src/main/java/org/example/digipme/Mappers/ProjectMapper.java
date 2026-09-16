package org.example.digipme.Mappers;

import org.example.digipme.DTOs.ProjectRequest;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Model.Project;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProjectMapper {
    Project toEntity(ProjectRequest request);
    ProjectResponse toResponse(Project project);

    void updateEntity(ProjectRequest request, Project project);
}
