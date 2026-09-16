package org.example.digipme.Mappers;

import org.example.digipme.DTOs.PMERequest;
import org.example.digipme.DTOs.PMEResponse;
import org.example.digipme.Model.PME;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PMEMapper {
    PME toEntity(PMERequest request);
    PMEResponse toResponse(PME pme);

    void updateEntity(PMERequest request, PME pme);
}

