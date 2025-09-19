// This file contains a mapping of Pokémon type names to their corresponding IDs.
// Currently not used (data is fetched from the API with our own server at root/server/src/data/pokemonTypeNameID.ts instead).
// Kept here only for reference or possible future use. 

import type { PokemonType } from '../types/pokemon';
export const pokemonTypeNameID: {id: number, name: PokemonType}[] = [
  { id: 1, name: 'normal' },
  { id: 2, name: 'fighting' },
  { id: 3, name: 'flying' },
  { id: 4, name: 'poison' },
  { id: 5, name: 'ground' },
  { id: 6, name: 'rock' },
  { id: 7, name: 'bug' },
  { id: 8, name: 'ghost' },
  { id: 9, name: 'steel' },
  { id: 10, name: 'fire' },
  { id: 11, name: 'water' },
  { id: 12, name: 'grass' },
  { id: 13, name: 'electric' },
  { id: 14, name: 'psychic' },
  { id: 15, name: 'ice' },
  { id :16 ,name: 'dragon' },
  { id: 17, name: 'dark' },
  { id: 18, name: 'fairy' },
];