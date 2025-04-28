'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPokemonByName } from '@/lib/api';
import PokemonProfileCard from '@/app/components/Pokemon/PokemonProfileCard';
import SkeltonPokemonProfileCard from '@/app/components/skelton/SkeltonPokemonProfileCard';
import NotFound from '@/app/components/NotFound';
import fallbackDataPokemon from '@/data/fallBackDataPokemon';
import type { Pokemon } from '@/types/pokemon';
import { useEffect } from 'react';

const PokemonProfileClient = ({ name }: { name: string }) => {
  const cachedData = typeof window !== 'undefined' ? localStorage.getItem(`pokemon-${name}`) : null;
  const initialData = cachedData ? JSON.parse(cachedData) : fallbackDataPokemon;

  const { data, error, isLoading, refetch } = useQuery<Pokemon>({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemonByName(name),
    enabled: !!name,
    initialData, 
    retry: 3, // Retry once on failure
  });

  useEffect(() => {
    if (data) {
      localStorage.setItem(`pokemon-${name}`, JSON.stringify(data));
    }
  }
  , [data, name]);

  if (isLoading) return <SkeltonPokemonProfileCard />;
  if (error) return <NotFound type='error' retry={refetch} />;
  if (!data) return <NotFound type='data' />;

  return <PokemonProfileCard pokemon={data} />;
};

export default PokemonProfileClient;
