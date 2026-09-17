package org.example.digipme.Repository;

import org.example.digipme.Enums.OfferStatus;
import org.example.digipme.Model.Offer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OfferRepository extends JpaRepository<Offer, Long> {
    Page<Offer> findByProjectId(Long projectId, Pageable pageable);

    Page<Offer> findByFreelancerId(Long id, Pageable pageable);

    boolean existsByProjectIdAndFreelancerId(Long id, Long id1);

    long countByFreelancerId(Long freelancerId);
    long countByFreelancerIdAndStatus(Long freelancerId, OfferStatus status);
    long countByProject_Pme_Id(Long pmeId);

    List<Offer> findTop5ByFreelancerIdOrderByIdDesc(Long freelancerId);
}