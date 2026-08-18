package com.dhwani.thalas.config;

import com.dhwani.thalas.model.Shirobheda;
import com.dhwani.thalas.repository.ShirobhedaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ShirobhedaData {

    @Bean
    CommandLineRunner loadShirobhedas(ShirobhedaRepository repository) {
        return args -> {
            // Delete and re-seed with authentic image URLs to ensure database consistency
            repository.deleteAll();

            // 1. Sama (Straight / Motionless)
            repository.save(new Shirobheda(
                    "Sama",
                    "The head is held straight, natural, and poised without any tilt or movement.",
                    "Used at the beginning of a dance recital, prayer, satisfaction, natural state, hesitation, and accepting an authoritative role.",
                    "/images/mudras/shirobheda/01-sama.png"
            ));

            // 2. Udvahitam (Raised / Looking Up)
            repository.save(new Shirobheda(
                    "Udvahitam",
                    "The head is lifted upwards facing the sky.",
                    "Used to denote gazing at the moon, towering temple gopurams, sky, celestial deities, mountain peaks, and tall trees.",
                    "/images/mudras/shirobheda/02-udvahitam.png"
            ));

            // 3. Adhomukham (Bent Downward)
            repository.save(new Shirobheda(
                    "Adhomukham",
                    "The head is bent downwards facing the ground.",
                    "Used to depict bashfulness, sorrow, bowing in reverence, shame, fainting, looking at things on the earth, and contemplation.",
                    "/images/mudras/shirobheda/03-adhomukham.png"
            ));

            // 4. Alolitam (Circular Movement)
            repository.save(new Shirobheda(
                    "Alolitam",
                    "The head is moved in a complete circular sweeping rotation.",
                    "Used to signify intoxication, dizziness, deep sleepiness, possession by spirits, and uncontrolled hearty laughter.",
                    "/images/mudras/shirobheda/04-alolitam.png"
            ));

            // 5. Dhutam (Shaking Side to Side)
            repository.save(new Shirobheda(
                    "Dhutam",
                    "The head is moved slowly and deliberately from left to right and right to left.",
                    "Used for denial, expressing 'no', looking sideways repeatedly, consoling, amazement, astonishment, and fear.",
                    "/images/mudras/shirobheda/05-dhutam.png"
            ));

            // 6. Kampitam (Nodding Up and Down)
            repository.save(new Shirobheda(
                    "Kampitam",
                    "The head is shaken up and down in quick nodding motions.",
                    "Used for showing approval, calling someone close, questioning, threatening in anger, and expressing understanding.",
                    "/images/mudras/shirobheda/06-kampitam.png"
            ));

            // 7. Paravrittam (Turned Aside)
            repository.save(new Shirobheda(
                    "Paravrittam",
                    "The head is turned fully to one side sharply.",
                    "Used to express turning away, disgust, anger, modesty, aversion, releasing an arrow, and looking behind.",
                    "/images/mudras/shirobheda/07-paravrittam.png"
            ));

            // 8. Ukshiptam (Slanted Upward)
            repository.save(new Shirobheda(
                    "Ukshiptam",
                    "The head is tilted obliquely upwards towards one side.",
                    "Used for indicating 'take this', cherishing, acceptance, pride, divine flight, and playful romantic gesture.",
                    "/images/mudras/shirobheda/08-ukshiptam.png"
            ));

            // 9. Parivahittam (Wagging Side to Side)
            repository.save(new Shirobheda(
                    "Parivahittam",
                    "The head is moved swiftly from side to side like a gentle fan without twisting.",
                    "Used for yearning, praise, romantic desire, infatuation, satisfaction, and playful appreciation.",
                    "/images/mudras/shirobheda/09-parivahittam.png"
            ));

            System.out.println("9 Shirobhedas (Head Movements) with authentic portrait images seeded into database!");
        };
    }
}
