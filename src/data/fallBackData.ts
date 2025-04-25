import type { Pokemon } from '../types/pokemon';

const fallbackDataPokemon: Pokemon= {
  id: 0,
  name: 'Unknown',
  types: ['normal'],
  abilities: ['none'],
  height: 0,
  weight: 0,
  stats: [{stat: 'none',value: 0,}],
  gender_rate: 0,
  genera: ['Unknown Pokémon'],
};

export default fallbackDataPokemon;