package com.dhwani.thalas.controller;

import com.dhwani.thalas.model.SaptaTala;
import com.dhwani.thalas.repository.SaptaRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/saptatalas")
public class SaptaTalaController {

    private final SaptaRepository saptaRepository;

    public SaptaTalaController(SaptaRepository saptaRepository) {
        this.saptaRepository = saptaRepository;
    }

    @GetMapping
    public List<SaptaTala> getAllSaptaTalas() {
        return saptaRepository.findAll();
    }
}