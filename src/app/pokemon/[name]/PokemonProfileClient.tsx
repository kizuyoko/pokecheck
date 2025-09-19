'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPokemonByName } from '@/lib/api';
import PokemonProfileCard from '@/app/components/Pokemon/PokemonProfileCard';
import SkeltonPokemonProfileCard from '@/app/components/skelton/SkeltonPokemonProfileCard';
import NotFound from '@/app/components/NotFound';
import fallbackDataPokemon from '@/data/fallBackDataPokemon';
import type { Pokemon } from '@/types/pokemon';
import { useEffect } from 'react';
import { usePokemons } from '@/lib/hooks/usePokemons';
import Button from '@/app/components/ui/Button';
import { getPrevNextItems } from '../../components/util/display';

const PokemonProfileClient = ({ name }: { name: string }) => {
  const { data: pokemons = [] } = usePokemons();
  const pokemonNameID = pokemons;

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

  const { prev: previousPokemon, next: nextPokemon } = getPrevNextItems(pokemonNameID, name);
  
  return (
    <>
      <PokemonProfileCard pokemon={data} />
      <div className='flex justify-center items-center gap-2 my-4'>
        <Button 
          link={`/pokemon/${previousPokemon}`}
          text='Previous'
          buttonClassName='text-lg'
          disabled={!previousPokemon} // Disable button if there is no previous Pokemon
        />
        <Button
          link={`/pokemon/${nextPokemon}`}
          text='Next'
          buttonClassName='text-lg'
          disabled={!nextPokemon} // Disable button if there is no next Pokemon
        />
      </div> 
    </>
  );
};

export default PokemonProfileClient;
