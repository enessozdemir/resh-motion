package com.project.resh_motion.repositories;

import com.project.resh_motion.entities.Dealership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DealershipRepository extends JpaRepository<Dealership, Long> {

}
