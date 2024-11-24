package com.project.resh_motion.services;


import com.project.resh_motion.dto.LoginUserDto;
import com.project.resh_motion.entities.User;
import com.project.resh_motion.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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
    private final AuthenticationManager authenticationManager;

    private UserService(UserRepository userRepository,AuthenticationManager authenticationManager,PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        userRepository.findAll().forEach(users::add);
        return users;
    }

    public User signUp(User user) {
        String encodedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encodedPassword);
        return userRepository.save(user);
    }

    public User signIn(LoginUserDto loginUserDto) {
        if (loginUserDto.getEmail() == null || loginUserDto.getEmail().isBlank()) {
            throw new IllegalArgumentException("E-posta boş olamaz!");
        }

        if (loginUserDto.getPassword() == null || loginUserDto.getPassword().isBlank()) {
            throw new IllegalArgumentException("Şifre boş olamaz!");
        }

        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            loginUserDto.getEmail(),
                            loginUserDto.getPassword()
                    )
            );
        } catch (BadCredentialsException e) {
            throw new IllegalArgumentException("Geçersiz e-posta veya şifre!");
        }

        return userRepository.findByEmail(loginUserDto.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Kullanıcı bulunamadı!"));
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }


}
