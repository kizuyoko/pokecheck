export interface PokemonTypeDetail {
  id: number;
  name: string;
  damage_relations?: {
    double_damage_from?: PokemonTypeNameID[];
    double_damage_to?: PokemonTypeNameID[];
    half_damage_from?: PokemonTypeNameID[];
    half_damage_to?: PokemonTypeNameID[];
    no_damage_from?: PokemonTypeNameID[];
    no_damage_to?: PokemonTypeNameID[];
  },
  pokemon: {
    pokemon:PokemonTypeNameID; 
    slot: number; 
  }[],
  moves?: PokemonTypeNameID[];
};

export interface PokemonTypeNameID {
  name: string;
  url: string;
};