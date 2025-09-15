// Constants for the application
// This file contains constants that are used throughout the application. 
// API
const BASE_API_URL = "https://pokeapi.co/api/v2";
export const POKEMON_API_URL = `${BASE_API_URL}/pokemon`;
export const TYPE_API_URL = `${BASE_API_URL}/type`;

// Images
export const POKEMON_IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

// API in own server URL
export const OWN_SERVER_URL = 
  process.env.NODE_ENV === 'production'
    ? 'https://pokecheck-ssh3.onrender.com'
    : 'http://localhost:3001';  

export const OWN_SERVER_API_URL_TYPES = `${OWN_SERVER_URL}/api/types`;
export const OWN_SERVER_API_URL_POKEMON = `${OWN_SERVER_URL}/api/pokemon`;

