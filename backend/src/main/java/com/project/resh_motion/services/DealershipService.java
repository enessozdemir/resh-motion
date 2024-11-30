package com.project.resh_motion.services;


import com.project.resh_motion.entities.Dealership;
import com.project.resh_motion.repositories.DealershipRepository;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DealershipService {

    @Autowired
    private DealershipRepository dealershipRepository;

    public List<Dealership> getAllDealerships() {
        return dealershipRepository.findAll();
    }
}
