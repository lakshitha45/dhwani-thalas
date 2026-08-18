package com.dhwani.thalas.config;

import com.dhwani.thalas.model.BhruBheda;
import com.dhwani.thalas.repository.BhruBhedaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class BhruBhedaData {

    @Bean
    CommandLineRunner loadBhruBhedas(BhruBhedaRepository repository) {
        return args -> {
            repository.deleteAll();

            // 1. Utksipta (Both Eyebrows Raised High)
            repository.save(new BhruBheda(
                    "Utksipta",
                    "Both eyebrows are elevated or raised high upwards simultaneously.",
                    "Used to denote intense joy, wonder, astonishment (Adbhuta rasa), sudden surprise, and royal anger."
            ));

            // 2. Patita (Both Eyebrows Lowered Low)
            repository.save(new BhruBheda(
                    "Patita",
                    "Both eyebrows are dropped, bent, and lowered downwards simultaneously.",
                    "Used to depict anger, deep disgust (Bibhatsa rasa), laughter, envy, disappointment, and smelling fragrant scents."
            ));

            // 3. Kuncita (Eyebrows Contracted Together)
            repository.save(new BhruBheda(
                    "Kuncita",
                    "The eyebrows are contracted and tightly drawn inwards towards each other.",
                    "Used for deep sorrow (Karuna rasa), feigned romantic anger (Maanam), crying, and intense grief."
            ));

            // 4. Recita (One Raised, One Natural)
            repository.save(new BhruBheda(
                    "Recita",
                    "One eyebrow is smoothly arched and lifted upwards while the other remains relaxed and natural.",
                    "Used to express wonder, secret romantic hints, coquetry (Shringara rasa), questioning, and shooting love arrows."
            ));

            // 5. Recita (Opposite)
            repository.save(new BhruBheda(
                    "Recita (Opposite)",
                    "The reverse arching: the opposite eyebrow is raised high while the other stays in its natural state.",
                    "Used in continuous conversational abhinaya, coquetry, subtle playful dialogue, and stylized dance gestures."
            ));

            // 6. Tiryyak (Side-Raising)
            repository.save(new BhruBheda(
                    "Tiryyak (Side-Raising)",
                    "Only the outer lateral corners of the eyebrows are raised obliquely upwards.",
                    "Used to depict seductive coquetry, sidelong romantic glances, playful teasing, and amorous charms."
            ));

            // 7. Kampita (Rapid Vibration)
            repository.save(new BhruBheda(
                    "Kampita",
                    "Rapid, subtle vibration, fluttering, or shaking of both eyebrows in quick succession.",
                    "Used to denote intense trembling, extreme fear (Bhayanaka rasa), deep distress, and shivering from cold."
            ));

            // 8. Valita (Raised then Quickly Lowered)
            repository.save(new BhruBheda(
                    "Valita",
                    "Both eyebrows are swiftly raised high upward, and then immediately dropped or lowered down.",
                    "Used to portray inner agitation, sudden startle, unexpected shock, swift realization, and surprise."
            ));

            // 9. Saruupa (Normal / Poised State)
            repository.save(new BhruBheda(
                    "Saruupa (Normal)",
                    "The standard, calm, relaxed, and undisturbed natural state of both eyebrows.",
                    "Used for serene contemplation, peace (Shanta rasa), dignified composure, prayer, and natural conversational state."
            ));

            System.out.println("9 Bhru Bhedas (Eyebrow Movements) matching canonical chart loaded into database!");
        };
    }
}
