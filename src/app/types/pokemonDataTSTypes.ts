export interface PokemonDataTSTypes {
  id: number;
  name: string;
  types: string[];
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