package com.project.resh_motion.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "cars")
@Data
public class Cars {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String brand;
    private String model;
    private String vehicle_class;
    private String gear_type;
    private Integer capacity;
    private String fuel_type;
    private Integer min_age;
    private Integer km_limit;
    private Integer price_per_day;
    private String defaultPhotoUrl;
}
