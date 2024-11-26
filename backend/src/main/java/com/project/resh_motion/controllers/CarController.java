package com.project.resh_motion.controllers;


import com.project.resh_motion.entities.Car;
import com.project.resh_motion.services.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cars")
public class CarController {
    @Autowired
    private CarService carService;

    @GetMapping
    private List<Car> getAllCars () {
        return carService.getAllCars();
    }

    @PostMapping("/add-vehicle")
    private Optional<Car> addCar(@RequestBody Car car) {
        return carService.addCar(car);
    }

    @PutMapping("/update-vehicle/{carId}")
    private Car updateCar(@PathVariable Long carId, @RequestBody Car car) {
        return carService.updateCar(carId, car);
    }


    @DeleteMapping("/delete-vehicle/{carId}")
    private void deleteCar (@PathVariable Long carId) {
        carService.deleteCar(carId);
    }



}
