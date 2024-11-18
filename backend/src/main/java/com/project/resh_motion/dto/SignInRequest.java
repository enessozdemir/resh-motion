package com.project.resh_motion.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SignInRequest {
    @Email(message = "Please enter a valid email address")
    @NotBlank(message = "Email field can not be empty")
    private String email;
    @NotBlank(message = "Password field can not be empty")
    private String password;
}
