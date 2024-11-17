package com.project.resh_motion.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.List;

@Entity
@Table(name = "car_photos")
@Data
public class CarPhotos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "car_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Cars car;

    @ElementCollection
    @CollectionTable(name = "car_photo_urls", joinColumns = @JoinColumn(name = "car_photo_id"))
    @Column(name = "photo_url")
    private List<String> photoUrls;

}
