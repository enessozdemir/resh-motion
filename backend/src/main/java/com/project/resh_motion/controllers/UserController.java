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

import java.util.List;

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
    private List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/sign-up")
    private ResponseEntity<String> signUp(@RequestBody User user) {
        return ResponseEntity.ok(userService.signUp(user));
    }

    @PostMapping("/sign-in")
    public ResponseEntity<LoginResponse> signIn(@Valid @RequestBody LoginUserDto loginUserDto) {
        User authenticatedUser = userService.signIn(loginUserDto);
        String jwtToken = jwtService.generateToken((UserDetails) authenticatedUser);
        LoginResponse loginResponse = LoginResponse.builder().token(jwtToken).expiresIn(jwtService.getExpirationTime()).build();
        return ResponseEntity.ok(loginResponse);
    }

    @DeleteMapping("delete/{userId}")
    private void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }

}