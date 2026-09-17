package org.example.digipme.Repository;

import org.example.digipme.Model.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    boolean existsByProjectIdAndFreelancerId(Long id, Long id1);

    Page<Review> findByFreelancerId(Long freelancerId, Pageable pageable);

    @Query("SELECT AVG(r.note) FROM Review r WHERE r.freelancer.id = :freelancerId")
    Double findAverageNoteByFreelancerId(@Param("freelancerId") Long freelancerId);
}