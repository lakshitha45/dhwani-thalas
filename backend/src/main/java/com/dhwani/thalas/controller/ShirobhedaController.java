package com.dhwani.thalas.controller;

import com.dhwani.thalas.model.Shirobheda;
import com.dhwani.thalas.repository.ShirobhedaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/shirobhedas")
@CrossOrigin(origins = "http://localhost:5173")
public class ShirobhedaController {

    private final ShirobhedaRepository repository;

    public ShirobhedaController(ShirobhedaRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Shirobheda> getAllShirobhedas() {
        return repository.findAll();
    }
}
