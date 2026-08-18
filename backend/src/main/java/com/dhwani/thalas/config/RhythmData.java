package com.dhwani.thalas.config;

import com.dhwani.thalas.model.Rhythm;
import com.dhwani.thalas.model.Saputala;
import com.dhwani.thalas.model.SaptaTala;
import com.dhwani.thalas.repository.RhythmRepository;
import com.dhwani.thalas.repository.SapuRepository;
import com.dhwani.thalas.repository.SaptaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;

import java.util.List;

@Configuration
public class RhythmData {

    @Bean
    @Order(10)
    CommandLineRunner loadRhythms(
            RhythmRepository rhythmRepository,
            SapuRepository sapuRepository,
            SaptaRepository saptaRepository) {

        return args -> {

            if (rhythmRepository.count() == 0) {

                List<Saputala> jatis = sapuRepository.findAll();
                List<SaptaTala> talas = saptaRepository.findAll();

                if (jatis.size() < 5 || talas.size() < 7) {
                    System.out.println("Waiting for Talas & Jatis to seed before initializing Rhythms...");
                    return;
                }

                // 5 Saputala values
                Saputala thisra = jatis.get(0);
                Saputala chatusra = jatis.get(1);
                Saputala kanda = jatis.get(2);
                Saputala misra = jatis.get(3);
                Saputala sangeerna = jatis.get(4);

                // 7 SaptaTala values
                SaptaTala dhuruva = talas.get(0);
                SaptaTala mattiya = talas.get(1);
                SaptaTala roobaga = talas.get(2);
                SaptaTala jumba = talas.get(3);
                SaptaTala thiriputa = talas.get(4);
                SaptaTala ada = talas.get(5);
                SaptaTala yega = talas.get(6);

                // Dhuruva
                rhythmRepository.save(new Rhythm(dhuruva, thisra, 11, "I3O2I3I3"));
                rhythmRepository.save(new Rhythm(dhuruva, chatusra, 14, "I4O2I4I4"));
                rhythmRepository.save(new Rhythm(dhuruva, kanda, 17, "I5O2I5I5"));
                rhythmRepository.save(new Rhythm(dhuruva, misra, 23, "I7O2I7I7"));
                rhythmRepository.save(new Rhythm(dhuruva, sangeerna, 29, "I9O2I9I9"));

                // Mattiya
                rhythmRepository.save(new Rhythm(mattiya, thisra, 8, "I3O2I3"));
                rhythmRepository.save(new Rhythm(mattiya, chatusra, 10, "I4O2I4"));
                rhythmRepository.save(new Rhythm(mattiya, kanda, 12, "I5O2I5"));
                rhythmRepository.save(new Rhythm(mattiya, misra, 16, "I7O2I7"));
                rhythmRepository.save(new Rhythm(mattiya, sangeerna, 20, "I9O2I9"));

                // Roobaga
                rhythmRepository.save(new Rhythm(roobaga, thisra, 5, "O2I3"));
                rhythmRepository.save(new Rhythm(roobaga, chatusra, 6, "O2I4"));
                rhythmRepository.save(new Rhythm(roobaga, kanda, 7, "O2I5"));
                rhythmRepository.save(new Rhythm(roobaga, misra, 9, "O2I7"));
                rhythmRepository.save(new Rhythm(roobaga, sangeerna, 11, "O2I9"));

                // Jumba
                rhythmRepository.save(new Rhythm(jumba, thisra, 6, "I3U1O2"));
                rhythmRepository.save(new Rhythm(jumba, chatusra, 7, "I4U1O2"));
                rhythmRepository.save(new Rhythm(jumba, kanda, 8, "I5U1O2"));
                rhythmRepository.save(new Rhythm(jumba, misra, 10, "I7U1O2"));
                rhythmRepository.save(new Rhythm(jumba, sangeerna, 12, "I9U1O2"));

                // Thiriputa
                rhythmRepository.save(new Rhythm(thiriputa, thisra, 7, "I3O2O2"));
                rhythmRepository.save(new Rhythm(thiriputa, chatusra, 8, "I4O2O2"));
                rhythmRepository.save(new Rhythm(thiriputa, kanda, 9, "I5O2O2"));
                rhythmRepository.save(new Rhythm(thiriputa, misra, 11, "I7O2O2"));
                rhythmRepository.save(new Rhythm(thiriputa, sangeerna, 13, "I9O2O2"));

                // Ada
                rhythmRepository.save(new Rhythm(ada, thisra, 10, "I3I3O2O2"));
                rhythmRepository.save(new Rhythm(ada, chatusra, 12, "I4I4O2O2"));
                rhythmRepository.save(new Rhythm(ada, kanda, 14, "I5I5O2O2"));
                rhythmRepository.save(new Rhythm(ada, misra, 18, "I7I7O2O2"));
                rhythmRepository.save(new Rhythm(ada, sangeerna, 22, "I9I9O2O2"));

                // Yega
                rhythmRepository.save(new Rhythm(yega, thisra, 3, "I3"));
                rhythmRepository.save(new Rhythm(yega, chatusra, 4, "I4"));
                rhythmRepository.save(new Rhythm(yega, kanda, 5, "I5"));
                rhythmRepository.save(new Rhythm(yega, misra, 7, "I7"));
                rhythmRepository.save(new Rhythm(yega, sangeerna, 9, "I9"));

                System.out.println("35 Rhythms inserted successfully!");
            }
        };
    }
}