package com.project.resh_motion.controllers;


import com.project.resh_motion.entities.User;
import com.project.resh_motion.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
    private User signUp(@RequestBody User user) {
        return userService.signUp(user);
    }

    @DeleteMapping("delete/{userId}")
    private void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }

}
