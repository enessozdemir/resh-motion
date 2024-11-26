package com.project.resh_motion.controllers;


import com.project.resh_motion.entities.User;
import com.project.resh_motion.services.JwtService;
import com.project.resh_motion.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<User>> getAllUsers() {
        List <User> users = userService.getAllUsers();

        return ResponseEntity.ok(users);
    }

    @DeleteMapping("delete/{userId}")
    private void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }

}