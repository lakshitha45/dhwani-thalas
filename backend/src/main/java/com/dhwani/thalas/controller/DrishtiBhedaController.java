package com.dhwani.thalas.controller;

import com.dhwani.thalas.model.DrishtiBheda;
import com.dhwani.thalas.repository.DrishtiBhedaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/drishti-bhedas")
@CrossOrigin(origins = "http://localhost:5173")
public class DrishtiBhedaController {

    private final DrishtiBhedaRepository repository;

    public DrishtiBhedaController(DrishtiBhedaRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<DrishtiBheda> getAllDrishtiBhedas() {
        return repository.findAll();
    }
}
