/**
 * Dhwani Thalas & HastaVidya - Resilient API Service Layer
 * Connects to Spring Boot backend (/api → http://localhost:8080) when available,
 * and seamlessly provides built-in canonical datasets when hosted statically on Vercel!
 */

import {
  ASAMYUKTA_HASTAS,
  SAMYUKTA_HASTAS,
  SHIROBHEDAS,
  DRISHTI_BHEDAS,
  GREEVA_BHEDAS,
  BHRU_BHEDAS,
  PADA_BHEDAS
} from '../data/shastras';
import { TALAS, JATIS, calculateAksharas } from '../data/talas';

const BASE_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/api`
  : '/api';

/**
 * Generates all 35 Tala × Jati rhythm combinations for fallback
 */
function getRhythmsFallback() {
  const result = [];
  let id = 1;
  for (const tala of TALAS) {
    for (const jati of JATIS) {
      const aksharas = calculateAksharas(tala, jati);
      result.push({
        id: id++,
        saptatala: { id: tala.id, name: tala.name },
        saputala: { id: jati.id, name: jati.name },
        counting: aksharas,
        notation: `${tala.symbol.replace(/I/g, `I${jati.count}`)} (${aksharas} Aksharas)`
      });
    }
  }
  return result;
}

/**
 * Fetches all 7 Sapta Talas from the backend, with instant fallback.
 */
export async function fetchSaptaTalas() {
  try {
    const response = await fetch(`${BASE_URL}/saptatalas`);
    if (response.ok) return await response.json();
  } catch (e) {
    // Graceful fallback for standalone Vercel hosting
  }
  return TALAS.map((t, idx) => ({ id: idx + 1, name: t.name, description: t.description, structure: t.symbol }));
}

/**
 * Fetches all 5 Jatis (Sapu Talas) from the backend, with instant fallback.
 */
export async function fetchJatis() {
  try {
    const response = await fetch(`${BASE_URL}/saputalas`);
    if (response.ok) return await response.json();
  } catch (e) {
    // Graceful fallback for standalone Vercel hosting
  }
  return JATIS.map((j, idx) => ({ id: idx + 1, name: j.name, count: j.count }));
}

/**
 * Fetches all 35 Rhythm combinations from the backend, with instant fallback.
 */
export async function fetchRhythms() {
  try {
    const response = await fetch(`${BASE_URL}/rhythms`);
    if (response.ok) return await response.json();
  } catch (e) {
    // Graceful fallback for standalone Vercel hosting
  }
  return getRhythmsFallback();
}

/**
 * Fetches 28 Asamyukta Hastas (Single-Hand Mudras) with instant fallback.
 */
export async function fetchAsamyuktaHastas() {
  try {
    const response = await fetch(`${BASE_URL}/asamyukta-hastas`);
    if (response.ok) return await response.json();
  } catch (e) {
    // Graceful fallback for standalone Vercel hosting
  }
  return ASAMYUKTA_HASTAS;
}

/**
 * Fetches 24 Samyukta Hastas (Double-Hand Mudras) with instant fallback.
 */
export async function fetchSamyuktaHastas() {
  try {
    const response = await fetch(`${BASE_URL}/samyukta-hastas`);
    if (response.ok) return await response.json();
  } catch (e) {
    // Graceful fallback for standalone Vercel hosting
  }
  return SAMYUKTA_HASTAS;
}

/**
 * Fetches 9 Shirobhedas (Head Movements) with instant fallback.
 */
export async function fetchShirobhedas() {
  try {
    const response = await fetch(`${BASE_URL}/shirobhedas`);
    if (response.ok) return await response.json();
  } catch (e) {
    // Graceful fallback for standalone Vercel hosting
  }
  return SHIROBHEDAS;
}

/**
 * Fetches 9 Drishti Bhedas (Eye Movements) with instant fallback.
 */
export async function fetchDrishtiBhedas() {
  try {
    const response = await fetch(`${BASE_URL}/drishti-bhedas`);
    if (response.ok) return await response.json();
  } catch (e) {
    // Graceful fallback for standalone Vercel hosting
  }
  return DRISHTI_BHEDAS;
}

/**
 * Fetches 9 Greeva Bhedas (Neck Movements) with instant fallback.
 */
export async function fetchGreevaBhedas() {
  try {
    const response = await fetch(`${BASE_URL}/greeva-bhedas`);
    if (response.ok) return await response.json();
  } catch (e) {
    // Graceful fallback for standalone Vercel hosting
  }
  return GREEVA_BHEDAS;
}

/**
 * Fetches 9 Bhru Bhedas (Eyebrow Movements) with instant fallback.
 */
export async function fetchBhruBhedas() {
  try {
    const response = await fetch(`${BASE_URL}/bhru-bhedas`);
    if (response.ok) return await response.json();
  } catch (e) {
    // Graceful fallback for standalone Vercel hosting
  }
  return BHRU_BHEDAS;
}

/**
 * Fetches 9 Pada Bhedas (Feet & Leg Postures) with instant fallback.
 */
export async function fetchPadaBhedas() {
  try {
    const response = await fetch(`${BASE_URL}/pada-bhedas`);
    if (response.ok) return await response.json();
  } catch (e) {
    // Graceful fallback for standalone Vercel hosting
  }
  return PADA_BHEDAS;
}

/**
 * Fetches all Mudra and Bheda datasets in parallel.
 */
export async function fetchAllMudrasAndBhedas() {
  const [asamyukta, samyukta, shirobheda, drishti, greeva, bhru, pada] = await Promise.all([
    fetchAsamyuktaHastas(),
    fetchSamyuktaHastas(),
    fetchShirobhedas(),
    fetchDrishtiBhedas(),
    fetchGreevaBhedas(),
    fetchBhruBhedas(),
    fetchPadaBhedas()
  ]);
  return { asamyukta, samyukta, shirobheda, drishti, greeva, bhru, pada };
}

/**
 * Finds matching rhythm calculation from fetched rhythms.
 */
export function findRhythm(rhythms, talaName, jatiName) {
  if (!rhythms || !talaName || !jatiName) return null;
  return rhythms.find(
    (r) =>
      r.saptatala?.name?.toLowerCase() === talaName.toLowerCase() &&
      r.saputala?.name?.toLowerCase() === jatiName.toLowerCase()
  ) ?? null;
}
