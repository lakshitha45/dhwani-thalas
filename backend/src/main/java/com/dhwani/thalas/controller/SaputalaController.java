package com.dhwani.thalas.controller;

import com.dhwani.thalas.model.Saputala;
import com.dhwani.thalas.repository.SapuRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/saputalas")
public class SaputalaController {

    private final SapuRepository sapuRepository;

    public SaputalaController(SapuRepository sapuRepository) {
        this.sapuRepository = sapuRepository;
    }

    @GetMapping
    public List<Saputala> getAllSaputalas() {
        return sapuRepository.findAll();
    }
}