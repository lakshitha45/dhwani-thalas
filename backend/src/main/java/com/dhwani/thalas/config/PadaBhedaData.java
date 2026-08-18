package com.dhwani.thalas.config;

import com.dhwani.thalas.model.PadaBheda;
import com.dhwani.thalas.repository.PadaBhedaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class PadaBhedaData {

    @Bean
    CommandLineRunner loadPadaBhedas(PadaBhedaRepository repository) {
        return args -> {
            repository.deleteAll();

            // 1. Sthira
            repository.save(new PadaBheda(
                    "Sthira",
                    "A stable, grounded, firm natural stance with weight evenly distributed on both feet.",
                    "Used to establish poise, steady composure, beginning of nritta sequences, and majestic stillness."
            ));

            // 2. Sama Pada
            repository.save(new PadaBheda(
                    "Sama Pada",
                    "Both feet are placed together touching closely in parallel alignment.",
                    "Used in initial prayer (Namaskaram), paying obeisance to the Guru and stage, and respectful salutations."
            ));

            // 3. Aagratala
            repository.save(new PadaBheda(
                    "Aagratala",
                    "Standing elevated on the balls of the feet with heels lifted gracefully upwards.",
                    "Used in swift spins, soaring leaps, agile gliding steps, and transitioning smoothly between movements."
            ));

            // 4. Parsva
            repository.save(new PadaBheda(
                    "Parsva",
                    "A wide side stance with feet extended laterally apart with grounded stability.",
                    "Used for wide lateral lunges, expansive stances in Natyadharmi abhinaya, and warrior postures."
            ));

            // 5. Mandala
            repository.save(new PadaBheda(
                    "Mandala",
                    "A circular, turned-out wide stance with heels inward and knees bent wide outwards (Aramandi / Ayata).",
                    "The sacred foundational diamond posture of Bharatanatyam recital, maintaining geometric energy and power."
            ));

            // 6. Alidha
            repository.save(new PadaBheda(
                    "Alidha",
                    "A dynamic leaning, crossed-leg posture with one leg bent forward and the other drawn across.",
                    "Used in archery postures, shooting arrows, martial heroics (Vira rasa), and royal authority."
            ));

            // 7. Kuttana
            repository.save(new PadaBheda(
                    "Kuttana",
                    "Stamping one foot forcefully against the ground to create a resounding percussive beat.",
                    "Used in foundational Tattadavu rhythmic strikes, synchronizing powerful rhythmic accents with the Mridangam."
            ));

            // 8. Pralupta
            repository.save(new PadaBheda(
                    "Pralupta",
                    "Gliding one foot smoothly along the floor surface in a continuous forward sliding motion.",
                    "Used in swift sliding advances (Sarikal), chasing, floating across the stage, and graceful transitions."
            ));

            // 9. Nupura
            repository.save(new PadaBheda(
                    "Nupura",
                    "A graceful, delicate crossed-leg sitting or standing pose emphasizing resonant ankle bells (Salangai).",
                    "Used in feminine grace (Lasya), showing off ankle ornaments, seated abhinaya, and romantic vignettes."
            ));

            System.out.println("9 Pada Bhedas (Foot Movements) matching canonical chart loaded into database!");
        };
    }
}
