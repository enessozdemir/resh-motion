package com.project.resh_motion.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "dealerships")
@Data
public class Dealership {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String city;
    private String district;
    private String location;
    private String phone_number;
    private String email;
}
