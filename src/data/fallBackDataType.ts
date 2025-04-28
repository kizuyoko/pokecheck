import type { PokemonTypeDetail } from "@/types/pokemonTypeDetail";

const fallbackDataType: PokemonTypeDetail = {
  id: 0,
  name: 'unknown',
  damage_relations: {
    double_damage_from: [],
    double_damage_to: [],
    half_damage_from: [],
    half_damage_to: [],
    no_damage_from: [],
    no_damage_to: [],
  },
  pokemon: [],
  moves: [],
  // Add any missing properties or adjust types to match the PokemonType interface
};

export default fallbackDataType;