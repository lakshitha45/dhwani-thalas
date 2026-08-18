package com.dhwani.thalas.config;

import com.dhwani.thalas.model.Saputala;
import com.dhwani.thalas.repository.SapuRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

@Configuration
public class DataSapuTala {

    @Bean
    @Order(1)
    CommandLineRunner loadJatis(SapuRepository jatiRepository) {

        return args -> {

            if (jatiRepository.count() == 0) {

                jatiRepository.save(new Saputala("Thisra", 3));
                jatiRepository.save(new Saputala("Chatusra", 4));
                jatiRepository.save(new Saputala("Khanda", 5));
                jatiRepository.save(new Saputala("Misra", 7));
                jatiRepository.save(new Saputala("Sankeerna", 9));

                System.out.println("5 Jatis inserted successfully!");
            }
        };
    }
}