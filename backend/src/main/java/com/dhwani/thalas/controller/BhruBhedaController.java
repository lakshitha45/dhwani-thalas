package com.dhwani.thalas.controller;

import com.dhwani.thalas.model.BhruBheda;
import com.dhwani.thalas.repository.BhruBhedaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/bhru-bhedas")
@CrossOrigin(origins = "http://localhost:5173")
public class BhruBhedaController {

    private final BhruBhedaRepository repository;

    public BhruBhedaController(BhruBhedaRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<BhruBheda> getAllBhruBhedas() {
        return repository.findAll();
    }
}
