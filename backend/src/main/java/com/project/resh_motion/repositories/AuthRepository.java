package com.project.resh_motion.repositories;

import com.project.resh_motion.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthRepository extends CrudRepository<User, Long> {
    User findByEmail(String email);
    User findFirstById(Long id);
}
