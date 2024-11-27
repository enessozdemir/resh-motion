package com.project.resh_motion.services;

import com.project.resh_motion.dto.LoginRequest;
import com.project.resh_motion.dto.LoginResponse;
import com.project.resh_motion.entities.User;
import com.project.resh_motion.repositories.UserRepository;
import com.project.resh_motion.util.JwtUtil;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
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


    public ResponseEntity<LoginResponse> signIn(LoginRequest request, HttpServletResponse response) throws Exception {
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());
        if (userOptional.isEmpty() || !passwordEncoder.matches(request.getPassword(), userOptional.get().getPassword())) {
            throw new Exception("Geçersiz email veya şifre!");
        }

        User user = userOptional.get();
        String token = jwtUtil.generateToken(request.getEmail());

        LoginResponse loginResponse = LoginResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .name(user.getName())
                .phone_number(user.getPhone_number())
                .address(user.getAddress())
                .createdAt(user.getCreatedAt())
                .token(token)
                .expiresIn(jwtUtil.getExpirationTime())
                .build();

        ResponseCookie cookie = ResponseCookie.from("access_token", loginResponse.getToken())
                .httpOnly(false)
                .path("/")
                .maxAge(loginResponse.getExpiresIn())
                .build();

        response.addHeader("Set-Cookie", cookie.toString());
        return ResponseEntity.ok(loginResponse);
    }
}
