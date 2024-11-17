package com.project.reshmotion.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.lang.reflect.Array;

@Document(collection = "cars")
@Data
public class Cars {
    @Id
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
