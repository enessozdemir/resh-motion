package com.project.resh_motion.controllers;


import com.project.resh_motion.dto.LoginUserDto;
import com.project.resh_motion.dto.LoginResponse;
import com.project.resh_motion.entities.User;
import com.project.resh_motion.services.JwtService;
import com.project.resh_motion.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private final JwtService jwtService;
    @Autowired
    private UserService userService;

    public UserController(JwtService jwtService, UserService userService) {
        this.jwtService = jwtService;
        this.userService=userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List <User> users = userService.getAllUsers();

        return ResponseEntity.ok(users);
    }

    @PostMapping("/auth/sign-up")
    public ResponseEntity<Map<String, Object>> signUp(@RequestBody User user) {
        User createdUser = userService.signUp(user);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Kullanıcı başarıyla oluşturuldu!");
        response.put("user", createdUser);

        return ResponseEntity.ok(response);
    }


    @PostMapping("/auth/sign-in")
    public ResponseEntity<LoginResponse> signIn(@Valid @RequestBody LoginUserDto loginUserDto) {
        User authenticatedUser = userService.signIn(loginUserDto);
        String jwtToken = jwtService.generateToken((UserDetails) authenticatedUser);
        LoginResponse loginResponse = LoginResponse.builder()
                .id(authenticatedUser.getId())
                .name(authenticatedUser.getName())
                .email(loginUserDto.getEmail())
                .address(authenticatedUser.getAddress())
                .phone_number(authenticatedUser.getPhone_number())
                .createdAt(authenticatedUser.getCreatedAt())
                .token(jwtToken).expiresIn(jwtService.getExpirationTime()).build();
        return ResponseEntity.ok(loginResponse);
    }

    @DeleteMapping("delete/{userId}")
    private void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }

}
