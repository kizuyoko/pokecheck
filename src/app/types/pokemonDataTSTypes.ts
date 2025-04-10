export interface PokemonDataTS {
  id: number;
  name: string;
  url: string; 
  imageURL: string;
  types: string[];
  abilities: string[];  
  height: number;
  weight: number;
  stats: {
    stat: string;
    value: number;
  }[];
};