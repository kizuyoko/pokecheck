export interface Pokemon {
  id: number;
  name: string;
  types: PokemonType[];
  abilities: string[];  
  height: number;
  weight: number;
  stats: {
    stat: string;
    value: number;
  }[];
  gender_rate: number;
  genera: string[];
};

export interface PokemonSimpleData {
  id: number;
  name: string;
};

export type PokemonType = 
  "normal" |
  "fighting" |      
  "flying" |
  "poison" |        
  "ground" |
  "rock" |
  "bug" |
  "ghost" |
  "steel" |
  "fire" |
  "water" |
  "grass" |
  "electric" |
  "psychic" |
  "ice" |
  "dragon" |
  "dark" |
  "fairy";

