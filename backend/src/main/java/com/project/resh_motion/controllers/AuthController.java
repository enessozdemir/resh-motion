package com.project.resh_motion.controllers;

import com.project.resh_motion.dto.LoginRequest;
import com.project.resh_motion.dto.LoginResponse;
import com.project.resh_motion.entities.User;
import com.project.resh_motion.services.AuthService;
import com.project.resh_motion.util.JwtUtil;
import jakarta.servlet.http.Cookie;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseCookie;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletResponse;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthService authService;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/sign-up")
    public ResponseEntity<Map<String, Object>> signUp(@RequestBody User user) {
        User createdUser = authService.signUp(user);

        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Kullanıcı başarıyla oluşturuldu!");
        response.put("user", createdUser);

        return ResponseEntity.ok(response);
    }

    @PostMapping("/sign-in")
    public ResponseEntity<LoginResponse> signIn(@RequestBody LoginRequest request, HttpServletResponse response) throws Exception {
       return authService.signIn(request, response);
    }

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticateUser(@CookieValue(name = "access_token", required = false) String access_token) {
        if (access_token != null && jwtUtil.validateToken(access_token)) {
            User user = jwtUtil.getUserFromToken(access_token);
            return ResponseEntity.ok(Map.of(
                    "isAuthenticated", true,
                    "user", Map.of(
                            "firstName", user.getName(),
                            "email", user.getEmail()
                    )
            ));
        }
        return ResponseEntity.ok(Map.of("isAuthenticated", false));
    }


    @PostMapping("/sign-out")
    public ResponseEntity<?> signOut(HttpServletResponse response) {
        Cookie cookie = new Cookie("access_token", null);
        cookie.setHttpOnly(true);
        cookie.setPath("/");
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        return ResponseEntity.ok(Map.of("message", "Signed out successfully"));
    }



}
