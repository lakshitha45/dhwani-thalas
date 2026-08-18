package com.dhwani.thalas.config;

import com.dhwani.thalas.model.GreevaBheda;
import com.dhwani.thalas.repository.GreevaBhedaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GreevaBhedaData {

    @Bean
    CommandLineRunner loadGreevaBhedas(GreevaBhedaRepository repository) {
        return args -> {
            repository.deleteAll();

            // 1. Sundari (Right)
            repository.save(new GreevaBheda(
                    "Sundari (Right)",
                    "Sideways horizontal gliding movement of the neck to the right side without tilting the head.",
                    "Used to depict beginning of affection, earnest approval, graceful charm, and sweet glances to the right."
            ));

            // 2. Sundari (Left)
            repository.save(new GreevaBheda(
                    "Sundari (Left)",
                    "Sideways horizontal gliding movement of the neck to the left side in a smooth, fluid manner.",
                    "Used to depict modesty, romantic response, graceful charm, and subtle dialogue towards the left."
            ));

            // 3. Sundari (Full Cycle)
            repository.save(new GreevaBheda(
                    "Sundari (Full Cycle)",
                    "Continuous, undulating horizontal neck mobility gliding smoothly back and forth between right and left.",
                    "Used to express overflowing joy, deep appreciation, radiant beauty, and classical rhythmic abhinaya."
            ));

            // 4. Tiraschina (Diagonal Right)
            repository.save(new GreevaBheda(
                    "Tiraschina (Diagonal Right)",
                    "Diagonal, oblique upward gliding movement of the neck looking gracefully towards the upper right.",
                    "Used in brandishing a sword, heroic expressions (Vira rasa), and watching soaring birds or clouds."
            ));

            // 5. Tiraschina (Diagonal Left)
            repository.save(new GreevaBheda(
                    "Tiraschina (Diagonal Left)",
                    "Diagonal gliding movement of the neck angled downward towards the lower left.",
                    "Used in depicting the slithering path of serpents, modesty, shy glances, and martial gestures."
            ));

            // 6. Tiraschina (Intricate Path)
            repository.save(new GreevaBheda(
                    "Tiraschina (Intricate Path)",
                    "Following a specific complex diagonal pathway with fluid undulations of the neck.",
                    "Used for nuanced emotional portrayals, dynamic abhinaya sequences, and stylized serpent postures."
            ));

            // 7. Prarivartita (Circular)
            repository.save(new GreevaBheda(
                    "Prarivartita (Circular)",
                    "Smooth, continuous circular 360-degree rotation of the neck with controlled rhythm.",
                    "Used to denote spinning movements, celestial realms, overwhelming wonder, and ecstatic devotion."
            ));

            // 8. Prarivartita (Arc)
            repository.save(new GreevaBheda(
                    "Prarivartita (Arc)",
                    "Defined circular arc movement sweeping smoothly across the upper semicircle.",
                    "Used to express crescent moon, rainbows, sweeping majestic landscapes, and royal grandeur."
            ));

            // 9. Prakampita (Vibratory)
            repository.save(new GreevaBheda(
                    "Prakampita (Vibratory)",
                    "Quick, small, rhythmic neck vibrations and subtle forward-backward shakes like a dove.",
                    "Used to depict tender affection, dialogue 'You and I', counting, and rhythmic folk dances."
            ));

            System.out.println("9 Greeva Bhedas (Neck Movements) matching canonical chart loaded into database!");
        };
    }
}
