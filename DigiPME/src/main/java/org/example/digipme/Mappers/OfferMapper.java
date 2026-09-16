package org.example.digipme.Mappers;

import org.example.digipme.DTOs.OfferRequest;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.Model.Offer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface OfferMapper {
    Offer toEntity(OfferRequest request);
    OfferResponse toResponse(Offer offer);
}
