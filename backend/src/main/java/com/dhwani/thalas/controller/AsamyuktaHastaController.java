package com.dhwani.thalas.controller;

import com.dhwani.thalas.model.AsamyuktaHasta;
import com.dhwani.thalas.repository.AsamyuktaHastaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/asamyukta-hastas")
@CrossOrigin(origins = "http://localhost:5173")
public class AsamyuktaHastaController {

    private final AsamyuktaHastaRepository repository;

    public AsamyuktaHastaController(AsamyuktaHastaRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<AsamyuktaHasta> getAllAsamyuktaHastas() {
        return repository.findAll();
    }
}
