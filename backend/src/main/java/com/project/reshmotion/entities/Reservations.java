package com.project.reshmotion.entities;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "reservations")
@Data
public class Reservations {
    @Id
    private Long id;

    @DBRef
    private Cars car;

    @DBRef
    private Users user;

    private LocalDateTime startDate;
    private LocalDateTime endDate;
    private double totalPrice;

    @CreatedDate
    private LocalDateTime createdAt;
}
