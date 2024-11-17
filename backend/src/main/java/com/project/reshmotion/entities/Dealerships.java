package com.project.reshmotion.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "dealerships")
@Data
public class Dealerships {
    @Id
    private Long id;
    private String city;
    private String district;
    private String location;
    private String phone_number;
    private String email;
}
