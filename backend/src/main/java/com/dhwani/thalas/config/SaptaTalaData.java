package com.dhwani.thalas.config;

import com.dhwani.thalas.model.SaptaTala;
import com.dhwani.thalas.repository.SaptaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

@Configuration
public class SaptaTalaData {

    @Bean
    @Order(2)
    CommandLineRunner loadTalas(SaptaRepository talaRepository) {

        return args -> {

            if (talaRepository.count() == 0) {

                talaRepository.save(new SaptaTala("Dhuruva", "Dhuruva Thalam", "|4O2|4|4"));
                talaRepository.save(new SaptaTala("Mattiya", "Mattiya Thalam", "|4O2|4"));
                talaRepository.save(new SaptaTala("Roobaga", "Roobaga Thalam", "O2|4"));
                talaRepository.save(new SaptaTala("Jumba", "Jumba Thalam", "|7U|O2"));
                talaRepository.save(new SaptaTala("Thiriputa", "Thiriputa Thalam", "|3O2O2"));
                talaRepository.save(new SaptaTala("Ada", "Ada Thalam", "|5|O2O2"));
                talaRepository.save(new SaptaTala("Yega", "Yega Thalam", "|4"));

                System.out.println("7 Talas inserted successfully!");
            }
        };
    }
}