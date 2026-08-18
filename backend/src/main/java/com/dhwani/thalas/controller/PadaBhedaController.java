package com.dhwani.thalas.controller;

import com.dhwani.thalas.model.PadaBheda;
import com.dhwani.thalas.repository.PadaBhedaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/pada-bhedas")
@CrossOrigin(origins = "http://localhost:5173")
public class PadaBhedaController {

    private final PadaBhedaRepository repository;

    public PadaBhedaController(PadaBhedaRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<PadaBheda> getAllPadaBhedas() {
        return repository.findAll();
    }
}
