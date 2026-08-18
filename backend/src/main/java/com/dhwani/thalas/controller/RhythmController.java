package com.dhwani.thalas.controller;

import com.dhwani.thalas.model.Rhythm;
import com.dhwani.thalas.repository.RhythmRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/rhythms")
public class RhythmController {

    private final RhythmRepository rhythmRepository;

    public RhythmController(RhythmRepository rhythmRepository) {
        this.rhythmRepository = rhythmRepository;
    }

    @GetMapping
    public List<Rhythm> getAllRhythms() {
        return rhythmRepository.findAll();
    }
}