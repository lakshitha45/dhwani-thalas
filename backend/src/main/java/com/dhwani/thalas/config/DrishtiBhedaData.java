package com.dhwani.thalas.config;

import com.dhwani.thalas.model.DrishtiBheda;
import com.dhwani.thalas.repository.DrishtiBhedaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DrishtiBhedaData {

    @Bean
    CommandLineRunner loadDrishtiBhedas(DrishtiBhedaRepository repository) {
        return args -> {
            repository.deleteAll();

            // 1. Sama (Central / Steady Gaze)
            repository.save(new DrishtiBheda(
                    "Sama",
                    "The eyes look straight ahead steadily without blinking, gazing serenely and pleasantly at eye level.",
                    "Used at the beginning of Natya recital, scales, contemplation, depicting divine deities, unblinking divine vision, and peaceful majesty.",
                    "/images/mudras/drishti/drishti-chart.png"
            ));

            // 2. Alokita (Circular / Wide-Eyed Movement)
            repository.save(new DrishtiBheda(
                    "Alokita",
                    "The eyeballs roll swiftly in a circular, sweeping movement looking all around with wide-eyed alertness.",
                    "Used to depict the turning of a potter's wheel, celestial discus (Chakra), looking around in surprise, and observing all spectators in an auditorium.",
                    "/images/mudras/drishti/drishti-chart.png"
            ));

            // 3. Saci / Saachee (Side-long / Oblique Glance)
            repository.save(new DrishtiBheda(
                    "Saci",
                    "The eyes gaze subtly out of the corners of the eyelids towards one side without turning the head.",
                    "Used for hinting, secret romance, shooting Lord Kamadeva's floral arrows, remembering unseen things, and subtle romantic interest (Shringara).",
                    "/images/mudras/drishti/drishti-chart.png"
            ));

            // 4. Pralokita (Side-to-Side Looking)
            repository.save(new DrishtiBheda(
                    "Pralokita",
                    "The eyes move continuously and broadly from left to right across a wide panoramic view.",
                    "Used to point out objects on both sides, looking across vast landscapes, measuring wide horizons, restlessness, and observing two items alternately.",
                    "/images/mudras/drishti/drishti-chart.png"
            ));

            // 5. Ullokita (Looking Upwards)
            repository.save(new DrishtiBheda(
                    "Ullokita",
                    "The pupils and gaze are directed straight upwards towards high elevations or the sky.",
                    "Used to gaze at temple spires (Gopurams), high flags, celestial bodies (moon, stars, sun), celestial beings (Devas), clouds, and heaven.",
                    "/images/mudras/drishti/drishti-chart.png"
            ));

            // 6. Anuvritta (Scanning or Following a Path)
            repository.save(new DrishtiBheda(
                    "Anuvritta",
                    "The eyes glance rapidly and repeatedly up and down or follow a continuous pathway.",
                    "Used to depict angry confrontation, searching someone from head to toe, inspecting a person's complete attire, sudden curiosity, and following moving objects.",
                    "/images/mudras/drishti/drishti-chart.png"
            ));

            // 7. Avalokita (Looking Downwards at the Feet)
            repository.save(new DrishtiBheda(
                    "Avalokita",
                    "The eyes look steadily downwards towards the floor, feet, or ground.",
                    "Used to look at one's own shadow, reflection in water, modesty, bashfulness (Lajja), sorrow, fatigue, and contemplating one's path.",
                    "/images/mudras/drishti/drishti-chart.png"
            ));

            // 8. Vilokita (Looking Back Over the Shoulder)
            repository.save(new DrishtiBheda(
                    "Vilokita",
                    "The gaze is cast backward or looking behind over the shoulder.",
                    "Used to depict looking back in yearning, fleeing in fear, watching someone follow behind, and secret glance backwards.",
                    "/images/mudras/drishti/drishti-chart.png"
            ));

            // 9. Kunchita (Narrowed / Contracted Gaze)
            repository.save(new DrishtiBheda(
                    "Kunchita",
                    "The eyelids are narrowed, slightly contracted, and squinted with concentrated focus.",
                    "Used for peering closely at tiny objects, expressing suspicion, pain, bright glare, and secretive examination.",
                    "/images/mudras/drishti/drishti-chart.png"
            ));

            System.out.println("9 Drishti Bhedas (Eye Movements) matching canonical chart loaded successfully into database!");
        };
    }
}
