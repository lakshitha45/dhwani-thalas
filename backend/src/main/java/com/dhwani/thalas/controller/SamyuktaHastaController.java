package com.dhwani.thalas.controller;

import com.dhwani.thalas.model.SamyuktaHasta;
import com.dhwani.thalas.repository.SamyuktaHastaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/samyukta-hastas")
@CrossOrigin(origins = "http://localhost:5173")
public class SamyuktaHastaController {

    private final SamyuktaHastaRepository repository;

    public SamyuktaHastaController(SamyuktaHastaRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<SamyuktaHasta> getAllSamyuktaHastas() {
        return repository.findAll();
    }
}
