package com.dhwani.thalas.controller;

import com.dhwani.thalas.model.GreevaBheda;
import com.dhwani.thalas.repository.GreevaBhedaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/greeva-bhedas")
@CrossOrigin(origins = "http://localhost:5173")
public class GreevaBhedaController {

    private final GreevaBhedaRepository repository;

    public GreevaBhedaController(GreevaBhedaRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<GreevaBheda> getAllGreevaBhedas() {
        return repository.findAll();
    }
}
