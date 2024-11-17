package com.project.reshmotion.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "car_dealerships")
@Data
public class CarDealerships {
    @Id
    private String id;

    @DBRef
    private Cars car;

    @DBRef
    private Dealerships dealership;

    private String availabilityStatus;

}
