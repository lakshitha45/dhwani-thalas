package com.dhwani.thalas.config;

import com.dhwani.thalas.model.AsamyuktaHasta;
import com.dhwani.thalas.repository.AsamyuktaHastaRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class AsamyuktaHastaData {

    @Bean
    CommandLineRunner loadAsamyuktaHastas(AsamyuktaHastaRepository repository) {
        return args -> {
            // Delete and re-seed with authentic image URLs to ensure database consistency
            repository.deleteAll();

            // 1. Pataka (Flag)
            repository.save(new AsamyuktaHasta(
                    "Pataka",
                    "All fingers extended straight and pressed close together, with the thumb bent slightly touching the base of the index finger.",
                    "Used to denote clouds, forest, night, river, open expanse, blessing, ocean, sword stroke, sweeping, and taking an oath.",
                    "/images/mudras/asamyukta/pataka.jpg"
            ));

            // 2. Tripataka (Three Parts of a Flag)
            repository.save(new AsamyuktaHasta(
                    "Tripataka",
                    "From Pataka position, the ring finger is bent downwards at the middle knuckle.",
                    "Used to denote a royal crown, tree, arrow, thunderbolt of Indra, raising flames, lamp, turning disc, and decorative forehead marks.",
                    "/images/mudras/asamyukta/tripataka.jpg"
            ));

            // 3. Ardhapataka (Half Flag)
            repository.save(new AsamyuktaHasta(
                    "Ardhapataka",
                    "Both the little finger and ring finger are bent downwards, with the index and middle fingers held upright together.",
                    "Used to depict tender leaves, river banks, knife or dagger, horn of an animal, tower, and flagstaff.",
                    "/images/mudras/asamyukta/ardhapataka.jpg"
            ));

            // 4. Kartarimukha (Scissors' Face)
            repository.save(new AsamyuktaHasta(
                    "Kartarimukha",
                    "The little finger and ring finger touch the thumb tip, while the index and middle fingers are spread apart like scissor blades.",
                    "Used to indicate separation of lovers, lightning, falling down, disagreement, death, sleeping alone, and overturning.",
                    "/images/mudras/asamyukta/kartarimukha.jpg"
            ));

            // 5. Mayura (Peacock)
            repository.save(new AsamyuktaHasta(
                    "Mayura",
                    "The tip of the ring finger touches the tip of the thumb, while the index, middle, and little fingers are extended upwards.",
                    "Used to portray the neck of a peacock, applying vermilion (tilakam), wiping tears, sacred thread (yajnopavita), and stroking hair.",
                    "/images/mudras/asamyukta/mayura.jpg"
            ));

            // 6. Ardhachandra (Half Moon)
            repository.save(new AsamyuktaHasta(
                    "Ardhachandra",
                    "All four fingers are held together straight while the thumb is stretched far outwards forming a semi-circle.",
                    "Used to denote the crescent moon on the eighth night, strangling or seizing the throat, consecration plate, waist, and meditation.",
                    "/images/mudras/asamyukta/ardhachandra.jpg"
            ));

            // 7. Arala (Bent)
            repository.save(new AsamyuktaHasta(
                    "Arala",
                    "From Pataka, the index finger is curved curved downwards gracefully while other fingers remain straight.",
                    "Used to signify drinking poison (Neelakantha), wild gust of wind, blessing, calling someone softly, and sipping water.",
                    "/images/mudras/asamyukta/arala.jpg"
            ));

            // 8. Shukatunda (Parrot's Beak)
            repository.save(new AsamyuktaHasta(
                    "Shukatunda",
                    "From Arala, the ring finger is also curved downwards along with the index finger.",
                    "Used to depict shooting an arrow, mystery, ferocity, remembering secret things, and shooting a spear.",
                    "/images/mudras/asamyukta/shukatunda.jpg"
            ));

            // 9. Mushti (Fist)
            repository.save(new AsamyuktaHasta(
                    "Mushti",
                    "All four fingers are curled tightly into the palm, with the thumb placed firmly across them.",
                    "Used to denote grasp, holding a weapon, wrestling, firmness, pluck, perseverance, and pulling hair.",
                    "/images/mudras/asamyukta/musti.jpg"
            ));

            // 10. Shikhara (Peak / Spire)
            repository.save(new AsamyuktaHasta(
                    "Shikhara",
                    "From Mushti (fist), the thumb is extended straight upwards vertically.",
                    "Used to represent Lord Shiva (Linga), Kamadeva (God of Love), bow, pillar, ringing a temple bell, tooth, and resolute strength.",
                    "/images/mudras/asamyukta/shikhara.jpg"
            ));

            // 11. Kapitha (Wood Apple)
            repository.save(new AsamyuktaHasta(
                    "Kapitha",
                    "From Shikhara, the index finger is bent over the tip of the thumb.",
                    "Used to represent Goddess Lakshmi, Goddess Saraswati, holding cymbals, milking cows, holding flowers, and grasping a veil.",
                    "/images/mudras/asamyukta/kapitha.jpg"
            ));

            // 12. Katakamukha (Opening in a Bracelet)
            repository.save(new AsamyuktaHasta(
                    "Katakamukha",
                    "The index and middle fingers bend to touch the thumb tip, while ring and little fingers remain raised diagonally.",
                    "Used for plucking flowers, wearing a pearl necklace, drawing the bowstring, offering betel leaves, applying perfume, and speaking.",
                    "/images/mudras/asamyukta/katakamukha.jpg"
            ));

            // 13. Suchi (Needle)
            repository.save(new AsamyuktaHasta(
                    "Suchi",
                    "The index finger is held straight upright, while the middle, ring, and little fingers are pressed against the palm with the thumb.",
                    "Used to represent the Supreme One (Parabrahma), universe, saying 'Look here', number one, pointing, lean body, and wheel.",
                    "/images/mudras/asamyukta/suchi.jpg"
            ));

            // 14. Chandrakala (Crescent Moon Digit)
            repository.save(new AsamyuktaHasta(
                    "Chandrakala",
                    "From Suchi, the thumb is released and extended straight outwards forming a wide right angle.",
                    "Used to denote the crescent moon on Lord Shiva's matted hair, length between thumb and forefinger, eyebrow curve, and crown.",
                    "/images/mudras/asamyukta/chandrakala.jpg"
            ));

            // 15. Padmakosha (Lotus Bud)
            repository.save(new AsamyuktaHasta(
                    "Padmakosha",
                    "All five fingers are curved inward towards the palm like a cup, separated slightly without touching.",
                    "Used to represent a lotus bud, Bilva fruit, ball, bowl, eating food, mango, bunch of flowers, and egg.",
                    "/images/mudras/asamyukta/padmakosha.jpg"
            ));

            // 16. Sarpashirsha (Serpent's Hood)
            repository.save(new AsamyuktaHasta(
                    "Sarpashirsha",
                    "From Pataka, the tips of all four fingers and thumb are curved slightly inwards like a snake hood.",
                    "Used to depict a snake hood, offering water to gods/ancestors (tarpana), motion of an elephant ear, and wrestling.",
                    "/images/mudras/asamyukta/sarpashirsa.jpg"
            ));

            // 17. Mrigashirsha (Deer's Head)
            repository.save(new AsamyuktaHasta(
                    "Mrigashirsha",
                    "The thumb and little finger are pointed upwards, while the three middle fingers are bent horizontally forward.",
                    "Used to depict deer head, women, cheek, umbrella, staircase, calling, playing lute, massaging feet, and forest roaming.",
                    "/images/mudras/asamyukta/mrigashirsha.jpg"
            ));

            // 18. Simhamukha (Lion's Face)
            repository.save(new AsamyuktaHasta(
                    "Simhamukha",
                    "The middle and ring fingers touch the thumb tip, while index and little fingers are held upright like lion ears.",
                    "Used to portray a lion, elephant, pearl, garland, lotus garland, testing gold, and medical preparation.",
                    "/images/mudras/asamyukta/simhamukha.jpg"
            ));

            // 19. Kangula (Tail / Bell)
            repository.save(new AsamyuktaHasta(
                    "Kangula",
                    "The ring finger is bent into the palm, while thumb, index, middle, and little fingers are curved gracefully outwards.",
                    "Used to represent bell fruit, betel nut tree, water lily, coconut, small bell, bird, and white water lily.",
                    "/images/mudras/asamyukta/kangula.jpg"
            ));

            // 20. Alapadma (Bloomed Lotus)
            repository.save(new AsamyuktaHasta(
                    "Alapadma",
                    "All fingers are separated and bent circularly outwards from the little finger up to the thumb like an open flower.",
                    "Used for a fully bloomed lotus, mirror, full moon, circular beauty, praise, offering temple flowers, and joy.",
                    "/images/mudras/asamyukta/alapadma.jpg"
            ));

            // 21. Chatura (Clever / Square)
            repository.save(new AsamyuktaHasta(
                    "Chatura",
                    "The thumb is placed inside the base of the middle finger, while index, middle, and ring fingers extend forward, little finger up.",
                    "Used to depict musk, a little quantity, gold, sorrow, aesthetic taste (Rasa), intellect, craft, and playful walking.",
                    "/images/mudras/asamyukta/chatura.jpg"
            ));

            // 22. Bhramara (Black Bee)
            repository.save(new AsamyuktaHasta(
                    "Bhramara",
                    "The index finger is curled inside the thumb root, thumb and middle finger touch at tips, ring and little fingers extended.",
                    "Used to denote a black bee (Bhramara), parrot, wing, crane, cuckoo, and secret conversation.",
                    "/images/mudras/asamyukta/bhramara.jpg"
            ));

            // 23. Hamsasya (Swan's Beak)
            repository.save(new AsamyuktaHasta(
                    "Hamsasya",
                    "The tips of the thumb, index, and middle fingers touch together gently, while ring and little fingers are stretched upwards.",
                    "Used to depict tying sacred thread, pearl, painting, instruction (Jnana mudra), drop of water, and fine line drawing.",
                    "/images/mudras/asamyukta/hamsasya.jpg"
            ));

            // 24. Hamsapaksha (Swan's Wing)
            repository.save(new AsamyuktaHasta(
                    "Hamsapaksha",
                    "From Pataka, the little finger is held straight upright while the other three fingers and thumb slope gracefully.",
                    "Used to signify number six, bridging, drawing a curtain, arranging, embracing, and expressing sadness.",
                    "/images/mudras/asamyukta/hamsapaksha.jpg"
            ));

            // 25. Samdamsha (Pincers / Tongs)
            repository.save(new AsamyuktaHasta(
                    "Samdamsha",
                    "All five fingers are brought together repeatedly and opened rapidly like the mouth of a bud or tongs.",
                    "Used to represent generous giving, sacrifice, counting, numbers, small insect, fear, and worship.",
                    "/images/mudras/asamyukta/samdamsha.jpg"
            ));

            // 26. Mukula (Flower Bud)
            repository.save(new AsamyuktaHasta(
                    "Mukula",
                    "All five fingertips are brought close together pointing upwards in a tight cone.",
                    "Used to depict a water lily, eating, God of Love (Kamadeva) shooting flower arrows, taking a bath in a river, and counting.",
                    "/images/mudras/asamyukta/mukula.jpg"
            ));

            // 27. Tamrachuda (Rooster's Crest)
            repository.save(new AsamyuktaHasta(
                    "Tamrachuda",
                    "From Mukula, the index finger is curved hook-like upwards like a cock's crest.",
                    "Used to represent a cock (rooster), crane, crow, camel, calf, writing letters, and sacred trident.",
                    "/images/mudras/asamyukta/tamrachuda.jpg"
            ));

            // 28. Trishula (Trident)
            repository.save(new AsamyuktaHasta(
                    "Trishula",
                    "The thumb and little finger are joined together at the base, while index, middle, and ring fingers extend straight up.",
                    "Used to represent the sacred Trident of Shiva (Trishula), Bilva leaves, trinity (Brahma-Vishnu-Shiva), and the three worlds.",
                    "/images/mudras/asamyukta/trishula.jpg"
            ));

            System.out.println("28 Asamyukta Hastas with authentic image URLs seeded into database!");
        };
    }
}
