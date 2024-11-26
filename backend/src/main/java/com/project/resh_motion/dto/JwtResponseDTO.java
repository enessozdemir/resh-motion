package com.project.resh_motion.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JwtResponseDTO {
    private Long id;
    private String email;
    private String name;
    private String phone_number;
    private String address;
    private LocalDateTime createdAt;
    private String accessToken;
    private String token;
}
