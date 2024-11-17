package com.project.reshmotion.entities;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "car_photos")
@Data
public class CarPhotos {
    @Id
    private Long id;

    @DBRef
    private Cars car;

    private List<String> photoUrls;
}
