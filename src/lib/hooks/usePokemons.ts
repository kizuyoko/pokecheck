import { useQuery } from '@tanstack/react-query';
import { fetchOwnServerPokemons } from '../api';
import { PokemonSimpleData } from '@/types/pokemon';

export const usePokemons = () => {
  return useQuery<PokemonSimpleData[], Error>({
    queryKey: ['pokemons'],
    queryFn: fetchOwnServerPokemons,
  });
};