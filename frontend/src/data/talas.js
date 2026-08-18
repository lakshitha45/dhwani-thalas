/**
 * Dhwani Thalas - Carnatic Rhythm Data Model & Sapta Tala Definitions
 * Structured for future GET /api/talas and GET /api/jatis integration
 */

export const ANGA_DEFINITIONS = {
  Laghu: {
    symbol: 'I',
    name: 'Laghu',
    baseCount: 'Variable (Jati)',
    action: 'Beat (Thattu) + Finger Counts (Viral Ennikkai)',
    description: '1 clap followed by counting fingers from little finger inwards, totalling the jati count.',
    color: '#C9A24B'
  },
  Dhrutam: {
    symbol: 'O',
    name: 'Dhrutam',
    baseCount: 2,
    action: 'Beat (Thattu) + Wave (Veechu)',
    description: '1 downward clap followed by 1 upward wave of the open palm (fixed 2 aksharas).',
    color: '#8F9CAE'
  },
  Anudhrutam: {
    symbol: 'U',
    name: 'Anudhrutam',
    baseCount: 1,
    action: 'Beat (Thattu)',
    description: '1 single downward clap of the palm with no wave (fixed 1 akshara).',
    color: '#A08040'
  }
};

export const TALAS = [
  {
    id: 'dhruva',
    name: 'Dhruva',
    sanskrit: 'ध्रुव',
    symbol: 'I O I I',
    anga: ['Laghu', 'Dhrutam', 'Laghu', 'Laghu'],
    description: 'A majestic 4-anga tala signifying firmness and cosmological permanence. Structured with three Laghus encompassing a central Dhrutam.',
    classicalNote: 'Commonly employed in Chatusra Jati (14 aksharas) for majestic Pallavis and deep laya calculations.',
    popularKritis: ['Sri Chamundeswari (Chatusra Dhruva)', 'Pancharatna Alankaras']
  },
  {
    id: 'matya',
    name: 'Matya',
    sanskrit: 'मट्य',
    symbol: 'I O I',
    anga: ['Laghu', 'Dhrutam', 'Laghu'],
    description: 'A symmetrical 3-anga tala translating to "churning". The central Dhrutam bridges two balanced Laghus with fluid rhythmic momentum.',
    classicalNote: 'In Chatusra Jati (10 aksharas), it brings balanced poetic grace to kritis and devotional padams.',
    popularKritis: ['Venkatesha Dayam Nidhe (Chatusra Matya)', 'Matya Tala Alankaram']
  },
  {
    id: 'rupaka',
    name: 'Rupaka',
    sanskrit: 'रूपक',
    symbol: 'O I',
    anga: ['Dhrutam', 'Laghu'],
    description: 'One of the most frequently rendered talas in Carnatic concerts. Beginning on a Dhrutam followed by a Laghu, creating an engaging asymmetric cadence.',
    classicalNote: 'Chatusra Jati Rupaka (6 aksharas) is ubiquitous across the compositions of Muthuswami Dikshitar and Tyagaraja.',
    popularKritis: ['Vatapi Ganapatim', 'Sobhillu Saptaswara', 'Nagumomu Ganaleni (Fast Rupaka)']
  },
  {
    id: 'jhampa',
    name: 'Jhampa',
    sanskrit: 'झम्प',
    symbol: 'I U O',
    anga: ['Laghu', 'Anudhrutam', 'Dhrutam'],
    description: 'The only Sapta Tala featuring an Anudhrutam (single beat). This introduces an intricate, breathless syncopation before the closing wave.',
    classicalNote: 'Misra Jati Jhampa (10 aksharas) is renowned for grand concert Varnams and expansive tana varnams.',
    popularKritis: ['Viriboni Varnam (Bhairavi)', 'Sarasijanabha (Kambhoji)']
  },
  {
    id: 'triputa',
    name: 'Triputa',
    sanskrit: 'त्रिपुट',
    symbol: 'I O O',
    anga: ['Laghu', 'Dhrutam', 'Dhrutam'],
    description: 'The archetype of Carnatic rhythmic cycles. In Chatusra jati, it forms the venerable Adi Tala, governing over 70% of classical concert repertoire.',
    classicalNote: 'Consists of a primary Laghu followed by two Dhrutams (clap + wave pairs), embodying timeless symmetry.',
    popularKritis: ['Endaro Mahanubhavulu (Adi Tala)', 'Bhavayami Raghuramam', 'Marugelara O Raghava']
  },
  {
    id: 'ata',
    name: 'Ata',
    sanskrit: 'अट',
    symbol: 'I I O O',
    anga: ['Laghu', 'Laghu', 'Dhrutam', 'Dhrutam'],
    description: 'A grand long-cycle tala with two successive Laghus followed by two Dhrutams. It demands consummate breath control and mastery of laya.',
    classicalNote: 'Khanda Jati Ata Tala (14 aksharas) is the crown foundation of classic Ata Tala Varnams in Carnatic music.',
    popularKritis: ['Nera Nammiti (Kaanada Varnam)', 'Kanakangi Varnam', 'Viriboni (often in Khanda Ata)']
  },
  {
    id: 'eka',
    name: 'Eka',
    sanskrit: 'एक',
    symbol: 'I',
    anga: ['Laghu'],
    description: 'The foundational single-anga tala composed solely of a single Laghu. Its cycle length matches the exact akshara count of the chosen Jati.',
    classicalNote: 'Chatusra Eka (4 aksharas) and Tisra Eka (3 aksharas) are common in bhajans, divyanama sankirtanas, and folk forms.',
    popularKritis: ['Rama Rama Krishna Rama', 'Namavali Bhajans', 'Eka Tala Geethams']
  }
];

export const JATIS = [
  {
    id: 'tisra',
    name: 'Tisra',
    count: 3,
    syllables: 'Ta Ki Ta',
    solkattu: ['Ta', 'Ki', 'Ta'],
    description: '3 Aksharas per Laghu',
    character: 'Swift, lilting ternary movement'
  },
  {
    id: 'chatusra',
    name: 'Chatusra',
    count: 4,
    syllables: 'Ta Ka Dhi Mi',
    solkattu: ['Ta', 'Ka', 'Dhi', 'Mi'],
    description: '4 Aksharas per Laghu',
    character: 'Stable, canonical quadruple balance'
  },
  {
    id: 'khanda',
    name: 'Khanda',
    count: 5,
    syllables: 'Ta Ka Ta Ki Ta',
    solkattu: ['Ta', 'Ka', 'Ta', 'Ki', 'Ta'],
    description: '5 Aksharas per Laghu',
    character: 'Dynamic, asymmetric 5-beat syncopation'
  },
  {
    id: 'misra',
    name: 'Misra',
    count: 7,
    syllables: 'Ta Ki Ta · Ta Ka Dhi Mi',
    solkattu: ['Ta', 'Ki', 'Ta', 'Ta', 'Ka', 'Dhi', 'Mi'],
    description: '7 Aksharas per Laghu',
    character: 'Majestic 7-beat blend (3 + 4)'
  },
  {
    id: 'sankirna',
    name: 'Sankirna',
    count: 9,
    syllables: 'Ta Ka Dhi Mi · Ta Ka Ta Ki Ta',
    solkattu: ['Ta', 'Ka', 'Dhi', 'Mi', 'Ta', 'Ka', 'Ta', 'Ki', 'Ta'],
    description: '9 Aksharas per Laghu',
    character: 'Expansive 9-beat compound cycle (4 + 5)'
  }
];

/**
 * Calculates total aksharas (beats) for a tala + jati pairing.
 * Formula: sum of anga counts where Laghu = jati.count, Dhrutam = 2, Anudhrutam = 1
 */
export function calculateAksharas(tala, jati) {
  if (!tala || !jati) return 0;
  return tala.anga.reduce((sum, angaName) => {
    if (angaName === 'Laghu') return sum + jati.count;
    if (angaName === 'Dhrutam') return sum + 2;
    if (angaName === 'Anudhrutam') return sum + 1;
    return sum;
  }, 0);
}

/**
 * Returns formatted anga breakdown with beat counts for each anga
 */
export function getAngaBreakdown(tala, jati) {
  if (!tala || !jati) return [];
  return tala.anga.map((angaName, index) => {
    let count = 0;
    let symbol = 'I';
    let kriyaText = '';
    
    if (angaName === 'Laghu') {
      count = jati.count;
      symbol = `I${jati.count}`;
      kriyaText = `Clap + ${jati.count - 1} finger count${jati.count - 1 > 1 ? 's' : ''}`;
    } else if (angaName === 'Dhrutam') {
      count = 2;
      symbol = 'O';
      kriyaText = 'Clap + Wave';
    } else if (angaName === 'Anudhrutam') {
      count = 1;
      symbol = 'U';
      kriyaText = 'Clap only';
    }

    return {
      index,
      angaName,
      count,
      symbol,
      kriyaText,
      definition: ANGA_DEFINITIONS[angaName]
    };
  });
}

/**
 * Prepares detailed beat list grouped by anga for the interactive visual beat-row
 */
export function getAngaBeats(tala, jati) {
  if (!tala || !jati) return [];
  const groups = [];
  let globalBeatCounter = 1;

  tala.anga.forEach((angaName, angaIdx) => {
    const angaBeats = [];
    let count = 0;
    let angaType = angaName;

    if (angaName === 'Laghu') {
      count = jati.count;
      for (let i = 0; i < count; i++) {
        const isClap = i === 0;
        angaBeats.push({
          beatNumber: globalBeatCounter++,
          angaIndex: angaIdx,
          angaName,
          subIndex: i + 1,
          label: isClap ? 'Clap' : `Finger ${i}`,
          isAngaStart: isClap,
          kriyaType: isClap ? 'thattu' : 'viral',
          syllable: jati.solkattu[i] || ''
        });
      }
    } else if (angaName === 'Dhrutam') {
      count = 2;
      angaBeats.push({
        beatNumber: globalBeatCounter++,
        angaIndex: angaIdx,
        angaName,
        subIndex: 1,
        label: 'Clap',
        isAngaStart: true,
        kriyaType: 'thattu',
        syllable: 'Dhim'
      });
      angaBeats.push({
        beatNumber: globalBeatCounter++,
        angaIndex: angaIdx,
        angaName,
        subIndex: 2,
        label: 'Wave',
        isAngaStart: false,
        kriyaType: 'veechu',
        syllable: 'Ta'
      });
    } else if (angaName === 'Anudhrutam') {
      count = 1;
      angaBeats.push({
        beatNumber: globalBeatCounter++,
        angaIndex: angaIdx,
        angaName,
        subIndex: 1,
        label: 'Clap',
        isAngaStart: true,
        kriyaType: 'thattu',
        syllable: 'Thoom'
      });
    }

    groups.push({
      angaIndex: angaIdx,
      angaName: angaType,
      count,
      symbol: angaName === 'Laghu' ? `I${jati.count}` : (angaName === 'Dhrutam' ? 'O' : 'U'),
      beats: angaBeats
    });
  });

  return groups;
}

/**
 * Returns common / traditional Carnatic name if applicable
 * e.g., Chatusra Jati Triputa Tala = "Adi Tala"
 */
export function getTraditionalTalaAlias(tala, jati) {
  if (!tala || !jati) return null;
  if (tala.id === 'triputa' && jati.id === 'chatusra') return 'Adi Tala (King of Talas)';
  if (tala.id === 'rupaka' && jati.id === 'chatusra') return 'Popular Chatusra Rupaka';
  if (tala.id === 'jhampa' && jati.id === 'misra') return 'Misra Jhampa (Varnam Tala)';
  if (tala.id === 'ata' && jati.id === 'khanda') return 'Khanda Ata (Grand Varnam Tala)';
  if (tala.id === 'triputa' && jati.id === 'tisra') return 'Tisra Triputa';
  return null;
}
