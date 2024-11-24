package com.project.resh_motion.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "cars")
@Data
public class Car {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String brand;
    private String model;
    private String vehicle_class;
    private String gear_type;
    private Integer capacity;
    private String fuel_type;
    private Integer min_age;
    private Integer km_limit;
    private Integer price_per_day;
    @Column(name = "default_photo_url", unique = true, nullable = false)
    private String defaultPhotoUrl;
}
