package com.project.resh_motion.controllers;


import com.project.resh_motion.dto.SignInRequest;
import com.project.resh_motion.dto.UserResponse;
import com.project.resh_motion.entities.User;
import com.project.resh_motion.services.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    private List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/sign-up")
    private ResponseEntity<UserResponse> signUp(@RequestBody User user) {
        UserResponse userResponse = userService.signUp(user);
        return ResponseEntity.ok(userResponse);
    }

    @PostMapping("/sign-in")
    public ResponseEntity<UserResponse> signIn(@Valid @RequestBody SignInRequest signInRequest) {
        UserResponse userResponse = userService.signIn(signInRequest);
        return ResponseEntity.ok(userResponse);
    }

    @DeleteMapping("delete/{userId}")
    private void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }

}
