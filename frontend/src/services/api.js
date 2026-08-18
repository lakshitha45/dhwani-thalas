/**
 * Dhwani Thalas & HastaVidya - API Service Layer
 * Connects to Spring Boot backend via Vite proxy (/api → http://localhost:8080)
 *
 * Endpoints:
 *   GET /api/saptatalas       → 7 Sapta Talas
 *   GET /api/saputalas        → 5 Jatis (Sapu Talas)
 *   GET /api/rhythms          → 35 Rhythm combinations (tala × jati)
 *   GET /api/asamyukta-hastas → 28 Single-Hand Mudras (Abhinaya Darpana)
 *   GET /api/samyukta-hastas  → 24 Double-Hand Mudras (Abhinaya Darpana)
 *   GET /api/shirobhedas      → 9 Head Movements (Abhinaya Darpana)
 *   GET /api/drishti-bhedas   → 9 Eye Movements (Abhinaya Darpana)
 *   GET /api/greeva-bhedas    → 4 Neck Movements (Abhinaya Darpana)
 *   GET /api/bhru-bhedas      → 7 Eyebrow Movements (Abhinaya Darpana / Natyashastra)
 *   GET /api/pada-bhedas      → 7 Feet & Leg Postures (Abhinaya Darpana)
 */

const BASE_URL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/api`
  : '/api';

/**
 * Fetches all 7 Sapta Talas from the backend.
 * @returns {Promise<Array>} Array of { id, name, description, structure }
 */
export async function fetchSaptaTalas() {
  const response = await fetch(`${BASE_URL}/saptatalas`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Sapta Talas: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetches all 5 Jatis (Sapu Talas) from the backend.
 * @returns {Promise<Array>} Array of { id, name, count }
 */
export async function fetchJatis() {
  const response = await fetch(`${BASE_URL}/saputalas`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Jatis: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetches all 35 Rhythm combinations from the backend.
 * Each rhythm has a saptatala, saputala, counting (beat count) and notation.
 * @returns {Promise<Array>} Array of { id, saptatala, saputala, counting, notation }
 */
export async function fetchRhythms() {
  const response = await fetch(`${BASE_URL}/rhythms`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Rhythms: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetches 28 Asamyukta Hastas (Single-Hand Mudras) from the backend.
 * @returns {Promise<Array>} Array of { id, name, description, usage }
 */
export async function fetchAsamyuktaHastas() {
  const response = await fetch(`${BASE_URL}/asamyukta-hastas`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Asamyukta Hastas: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetches 24 Samyukta Hastas (Double-Hand Mudras) from the backend.
 * @returns {Promise<Array>} Array of { id, name, description, usage }
 */
export async function fetchSamyuktaHastas() {
  const response = await fetch(`${BASE_URL}/samyukta-hastas`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Samyukta Hastas: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetches 9 Shirobhedas (Head Movements) from the backend.
 * @returns {Promise<Array>} Array of { id, name, description, usage }
 */
export async function fetchShirobhedas() {
  const response = await fetch(`${BASE_URL}/shirobhedas`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Shirobhedas: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetches 9 Drishti Bhedas (Eye Movements) from the backend.
 * @returns {Promise<Array>} Array of { id, name, description, usage }
 */
export async function fetchDrishtiBhedas() {
  const response = await fetch(`${BASE_URL}/drishti-bhedas`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Drishti Bhedas: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetches 4 Greeva Bhedas (Neck Movements) from the backend.
 * @returns {Promise<Array>} Array of { id, name, description, usage }
 */
export async function fetchGreevaBhedas() {
  const response = await fetch(`${BASE_URL}/greeva-bhedas`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Greeva Bhedas: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetches 7 Bhru Bhedas (Eyebrow Movements) from the backend.
 * @returns {Promise<Array>} Array of { id, name, description, usage }
 */
export async function fetchBhruBhedas() {
  const response = await fetch(`${BASE_URL}/bhru-bhedas`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Bhru Bhedas: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetches 7 Pada Bhedas (Feet & Leg Postures) from the backend.
 * @returns {Promise<Array>} Array of { id, name, description, usage }
 */
export async function fetchPadaBhedas() {
  const response = await fetch(`${BASE_URL}/pada-bhedas`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pada Bhedas: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

/**
 * Fetches all Mudra and Bheda datasets in parallel.
 * @returns {Promise<{ asamyukta: Array, samyukta: Array, shirobheda: Array, drishti: Array, greeva: Array, bhru: Array, pada: Array }>}
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
 * Fetches a specific rhythm's beat count for a given tala name and jati name.
 * Looks up the matching rhythm from the pre-fetched rhythms array.
 *
 * @param {Array}  rhythms   - All rhythms from fetchRhythms()
 * @param {string} talaName  - Backend tala name (e.g. "Thiriputa")
 * @param {string} jatiName  - Backend jati name (e.g. "Chatusra")
 * @returns {{ counting: number, notation: string } | null}
 */
export function findRhythm(rhythms, talaName, jatiName) {
  if (!rhythms || !talaName || !jatiName) return null;
  return rhythms.find(
    (r) =>
      r.saptatala?.name?.toLowerCase() === talaName.toLowerCase() &&
      r.saputala?.name?.toLowerCase() === jatiName.toLowerCase()
  ) ?? null;
}
