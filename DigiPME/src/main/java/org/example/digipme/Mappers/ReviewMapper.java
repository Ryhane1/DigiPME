package org.example.digipme.Mappers;

import org.example.digipme.DTOs.ReviewRequest;
import org.example.digipme.DTOs.ReviewResponse;
import org.example.digipme.Model.Review;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review toEntity(ReviewRequest reviewRequest);
    ReviewResponse toResponse(Review review);

}
