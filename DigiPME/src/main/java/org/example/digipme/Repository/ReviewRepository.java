package org.example.digipme.Repository;

import org.example.digipme.DTOs.ReviewResponse;
import org.example.digipme.Model.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.nio.channels.FileChannel;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    boolean existsByProjectIdAndFreelancerId(Long id, Long id1);

    Page<Review> findByFreelancerId(Long freelancerId, Pageable pageable);
}
