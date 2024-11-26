package com.project.resh_motion.services;

import com.project.resh_motion.entities.Car;
import com.project.resh_motion.repositories.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarService {
    @Autowired
    private CarRepository carRepository;

    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    public Optional<Car> addCar(Car car) {
        Optional<Car> savedCar = carRepository.findById(car.getId());
        if(savedCar.isPresent()) {
            return savedCar;
        } else {
            return Optional.of(carRepository.save(car));
        }
    }

    public Car updateCar(Long carId, Car car) {
        Car isActiveCar = carRepository.findById(carId).orElse(null);
            isActiveCar.setBrand(car.getBrand());
            isActiveCar.setModel(car.getModel());
            isActiveCar.setVehicle_class(car.getVehicle_class());
            isActiveCar.setGear_type(car.getGear_type());
            isActiveCar.setCapacity(car.getCapacity());
            isActiveCar.setFuel_type(car.getFuel_type());
            isActiveCar.setMin_age(car.getMin_age());
            isActiveCar.setKm_limit(car.getKm_limit());
            isActiveCar.setPrice_per_day(car.getPrice_per_day());
            isActiveCar.setDefaultPhotoUrl(car.getDefaultPhotoUrl());
            return carRepository.save(isActiveCar);
    }

    public void deleteCar(Long carId) {
        carRepository.deleteById(carId);
    }
}
