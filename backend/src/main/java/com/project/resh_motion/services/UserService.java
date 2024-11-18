package com.project.resh_motion.services;


import com.project.resh_motion.dto.SignInRequest;
import com.project.resh_motion.dto.UserResponse;
import com.project.resh_motion.entities.User;
import com.project.resh_motion.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    private UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public UserResponse signUp(User user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        userRepository.save(user);
        return new UserResponse(user.getName(), user.getEmail());
    }

    public UserResponse signIn(SignInRequest signInRequest) {
        User loginUser = userRepository.findByEmail(signInRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found!"));
        if (!passwordEncoder.matches(signInRequest.getPassword(), loginUser.getPassword())) {
            throw new RuntimeException("Invalid email or password!");
        }

        return new UserResponse(loginUser.getName(), loginUser.getEmail());
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }


}
