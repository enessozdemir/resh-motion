package com.project.resh_motion.controllers;


import com.project.resh_motion.entities.Dealership;
import com.project.resh_motion.services.DealershipService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/dealerships")
public class DealershipController {

    @Autowired
    private DealershipService dealershipService;

    @GetMapping
    private List<Dealership> getAllDealerships() {
        return dealershipService.getAllDealerships();
    }

}
