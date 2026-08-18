package com.dhwani.thalas.config;

import com.dhwani.thalas.model.SamyuktaHasta;
import com.dhwani.thalas.repository.SamyuktaHastaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SamyuktaHastaData {

    @Bean
    CommandLineRunner loadSamyuktaHastas(SamyuktaHastaRepository repository) {
        return args -> {
            // Delete and re-seed with authentic image URLs to ensure database consistency
            repository.deleteAll();

            // 1. Anjali (Salutation / Offering)
            repository.save(new SamyuktaHasta(
                    "Anjali",
                    "Two Pataka hands joined together palm to palm in reverence.",
                    "Held above the head to salute deities, in front of the face to salute gurus and teachers, and in front of the chest to salute elders and scholars.",
                    "/images/mudras/samyukta/anjali.jpg"
            ));

            // 2. Kapotam (Dove / Pigeon)
            repository.save(new SamyuktaHasta(
                    "Kapotam",
                    "Two Pataka hands joined along the outer sides and fingertips, with the centers of both palms hollowed out like a dove.",
                    "Used for respectful greeting, accepting objects humbly, submissive agreement, showing humility, and conversation with spiritual masters.",
                    "/images/mudras/samyukta/kapota.jpg"
            ));

            // 3. Karkatam (Crab)
            repository.save(new SamyuktaHasta(
                    "Karkatam",
                    "Fingers of both hands are interlocked together, with palms turned facing either inwards towards the body or outwards.",
                    "Used to depict arrival of a crowd, holding the belly, blowing the conch shell, stretching or twisting limbs, and pulling down branches.",
                    "/images/mudras/samyukta/karkata.jpg"
            ));

            // 4. Swastikam (Cross / Auspicious Intersection)
            repository.save(new SamyuktaHasta(
                    "Swastikam",
                    "Two Pataka hands crossed at the wrists and held across the chest or towards the left and right.",
                    "Used to depict clouds, sky, vast forest, oceans, changing seasons, expansive terrain, praising, and expressing denial or disagreement.",
                    "/images/mudras/samyukta/savastika.jpg"
            ));

            // 5. Dola (Swing)
            repository.save(new SamyuktaHasta(
                    "Dola",
                    "Two Pataka hands placed loosely beside the thighs with palms facing down and arms relaxed.",
                    "Used at the beginning of Natya (classical dance presentation), resting state, expressing languid sorrow, or carefree abandonment.",
                    "/images/mudras/samyukta/dola.jpg"
            ));

            // 6. Pushpaputam (Flower Basket / Offering Cup)
            repository.save(new SamyuktaHasta(
                    "Pushpaputam",
                    "Two Sarpashirsha hands joined side by side with cupped palms forming a container for flowers.",
                    "Used for waving Aarti lamps before the deity, offering flowers (Pushpanjali), accepting fruits or consecrated water, and evening Sandhya prayers.",
                    "/images/mudras/samyukta/puspaputa.jpg"
            ));

            // 7. Utsangam (Embrace)
            repository.save(new SamyuktaHasta(
                    "Utsangam",
                    "Two Mrigashirsha hands crossed over the chest touching the opposite shoulders.",
                    "Used to depict an embrace, showing modesty, bashfulness or shyness, disciplining or teaching young children, and displaying armlets.",
                    "/images/mudras/samyukta/utsanga.jpg"
            ));

            // 8. Shivalingam (Sacred Linga of Lord Shiva)
            repository.save(new SamyuktaHasta(
                    "Shivalingam",
                    "The right hand in Shikhara mudra is placed firmly over the left hand held horizontally in Ardhachandra mudra.",
                    "Used specifically to represent the sacred Lingam of Lord Shiva, cosmic pillar of light, and divine phallus representing creation.",
                    "/images/mudras/samyukta/sivalinga.jpg"
            ));

            // 9. Katakavardhanam (Link of Bracelets)
            repository.save(new SamyuktaHasta(
                    "Katakavardhanam",
                    "Two Katakamukha hands crossed at the wrists held in front of the chest.",
                    "Used for royal coronation, wedding rituals, worship of deities, showing peace and tranquility, and delicate artistic expressions.",
                    "/images/mudras/samyukta/katakavardhana.jpg"
            ));

            // 10. Kartariswastikam (Crossed Scissors)
            repository.save(new SamyuktaHasta(
                    "Kartariswastikam",
                    "Two Kartarimukha hands crossed at the wrists with index and middle fingers spread apart.",
                    "Used to represent branches of large trees, mountain peaks, high hilltops, and dense forest canopies.",
                    "/images/mudras/samyukta/kartarisvastika.jpg"
            ));

            // 11. Shakatam (Demon Wheel / Cart)
            repository.save(new SamyuktaHasta(
                    "Shakatam",
                    "Two Bhramara hands held with thumbs and middle fingers touching and extended outward towards each other.",
                    "Used to depict the demon wheel (Shakatasura slain by Lord Krishna), demonic figures, monsters, and large chariot wheels.",
                    "/images/mudras/samyukta/sakata.jpg"
            ));

            // 12. Shankha (Sacred Conch Shell)
            repository.save(new SamyuktaHasta(
                    "Shankha",
                    "The thumb of the right Shikhara hand is clasped by the four fingers of the left hand, with the left thumb touching the right middle fingertip.",
                    "Used to represent the sacred Conch Shell (Panchajanya) of Lord Vishnu, blown during divine worship, auspicious occasions, and battlefield declaration.",
                    "/images/mudras/samyukta/sankha.jpg"
            ));

            // 13. Chakram (Divine Discus / Wheel)
            repository.save(new SamyuktaHasta(
                    "Chakram",
                    "Two Ardhachandra hands placed across each other perpendicularly with palms touching at right angles.",
                    "Used to represent the Sudarshana Chakra (the divine spinning discus weapon of Lord Vishnu), solar disc, and rotating celestial wheel.",
                    "/images/mudras/samyukta/chakra.jpg"
            ));

            // 14. Samputam (Sacred Box / Casket)
            repository.save(new SamyuktaHasta(
                    "Samputam",
                    "The fingers of both hands in Chakra mudra are curved inwards to form a closed hollow box.",
                    "Used for concealing precious gems, holding secret jewellery boxes, protecting sacred items, and keeping secrets.",
                    "/images/mudras/samyukta/samputa.jpg"
            ));

            // 15. Pasham (Noose / Chain of Bondage)
            repository.save(new SamyuktaHasta(
                    "Pasham",
                    "The index fingers of two Suchi hands are curved and hooked together like links of a chain.",
                    "Used to denote quarrel, enmity, mutual hatred, fetters, chains, the divine noose of Lord Yama (God of Death) or Lord Varuna.",
                    "/images/mudras/samyukta/pasa.jpg"
            ));

            // 16. Kilakam (Bond of Affection / Union)
            repository.save(new SamyuktaHasta(
                    "Kilakam",
                    "The little fingers of two Mrigashirsha hands are interlinked and hooked together.",
                    "Used to depict deep affection, romantic union, playful intimacy between lovers, and unbreakable friendship.",
                    "/images/mudras/samyukta/kilaka.jpg"
            ));

            // 17. Matsyam (Fish / Matsya Avatara)
            repository.save(new SamyuktaHasta(
                    "Matsyam",
                    "Two Pataka hands placed on top of each other facing down, with both thumbs extended outwards like swimming fins.",
                    "Used to represent Lord Vishnu's Matsya Avatara (Fish incarnation), fish swimming in rivers or ocean, and aquatic life.",
                    "/images/mudras/samyukta/matsya.jpg"
            ));

            // 18. Kurmam (Tortoise / Kurma Avatara)
            repository.save(new SamyuktaHasta(
                    "Kurmam",
                    "Fingers of both hands bent inward with right thumb touching left little finger and left thumb extended outward.",
                    "Used to represent Lord Vishnu's Kurma Avatara (Tortoise incarnation), stability, and hard protective shell.",
                    "/images/mudras/samyukta/kurma.jpg"
            ));

            // 19. Varaham (Wild Boar / Varaha Avatara)
            repository.save(new SamyuktaHasta(
                    "Varaham",
                    "Two Mrigashirsha hands placed one over the other with thumbs and little fingers touching respective tips.",
                    "Used to represent Lord Vishnu's Varaha Avatara (Boar incarnation who lifted Mother Earth from the cosmic depths).",
                    "/images/mudras/samyukta/varaha.jpg"
            ));

            // 20. Garudam (Celestial Eagle / Divine Mount)
            repository.save(new SamyuktaHasta(
                    "Garudam",
                    "Two Ardhachandra hands crossed at the thumbs with palms facing inwards and fingers fluttering rhythmically.",
                    "Used to depict Garuda (the divine eagle mount of Lord Vishnu), large birds in flight, and soaring across the skies.",
                    "/images/mudras/samyukta/garuda.jpg"
            ));

            // 21. Nagabandham (Serpent Entwinement)
            repository.save(new SamyuktaHasta(
                    "Nagabandham",
                    "Two Sarpashirsha hands crossed at the wrists with palms held forward.",
                    "Used to depict pairs of intertwined serpents, coiled nagas, Atharvana Veda occult spells, and creepers entwining trees.",
                    "/images/mudras/samyukta/nagabandha.jpg"
            ));

            // 22. Khatva (Cot / Bedstead / Palanquin)
            repository.save(new SamyuktaHasta(
                    "Khatva",
                    "Two Chatura hands placed facing each other with thumbs and middle fingers touching.",
                    "Used to denote a bed, cot, royal palanquin (litter), resting couch, and structural bridges.",
                    "/images/mudras/samyukta/katva.jpg"
            ));

            // 23. Bherundam (Two-Headed Royal Bird)
            repository.save(new SamyuktaHasta(
                    "Bherundam",
                    "Two Kapittha hands crossed at the wrists facing outwards.",
                    "Used to depict the Gandabherunda (the legendary two-headed bird of supreme royal power, strength, and majesty).",
                    "/images/mudras/samyukta/perunda.jpg"
            ));

            // 24. Avahittham (Cluster of Blossoms / Emotional Concealment)
            repository.save(new SamyuktaHasta(
                    "Avahittham",
                    "Two Alapadma hands crossed over the chest with fingers curved inwards towards the body.",
                    "Used to depict holding emotional feelings within the heart, erotic sentiment (Shringara rasa), looking up with love, and flower clusters.",
                    "/images/mudras/samyukta/avahita.jpg"
            ));

            System.out.println("24 Samyukta Hastas (Two Hand Gestures) with authentic image URLs loaded successfully into database!");
        };
    }
}
