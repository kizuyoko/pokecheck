export interface PokemonSimpleData {
  id: number;
  name: string;
};
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
  gender_rate: PokemonGender;
  genera: string[];
};

export enum PokemonGender {
  Unknown = -1, 
  Male = 0,
  Female = 8,
  Both = 4,
}

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

