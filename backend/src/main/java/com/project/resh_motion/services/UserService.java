package com.project.resh_motion.services;


import com.project.resh_motion.entities.User;
import com.project.resh_motion.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private final PasswordEncoder passwordEncoder;
    @Autowired


    private UserService(UserRepository userRepository,PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    public Optional<User> getOneUser(Long userId) {
        return userRepository.findById(userId);
    }
}