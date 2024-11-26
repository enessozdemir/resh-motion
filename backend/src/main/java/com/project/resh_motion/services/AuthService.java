package com.project.resh_motion.services;

import com.project.resh_motion.dto.LoginResponse;
import com.project.resh_motion.entities.User;
import com.project.resh_motion.repositories.UserRepository;
import com.project.resh_motion.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    public User signUp(User user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userRepository.save(user);
    }

    public LoginResponse signIn(String email, String password) throws Exception {
        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isEmpty() || !passwordEncoder.matches(password, userOptional.get().getPassword())) {
            throw new Exception("Invalid email or password");
        }

        User user = userOptional.get();
        String token = jwtUtil.generateToken(email);

        return LoginResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .name(user.getName())
                .phone_number(user.getPhone_number())
                .address(user.getAddress())
                .createdAt(user.getCreatedAt())
                .token(token)
                .expiresIn(jwtUtil.getExpirationTime())
                .build();
    }

}
