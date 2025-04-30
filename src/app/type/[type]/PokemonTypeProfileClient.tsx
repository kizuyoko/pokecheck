'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPokemonTypeByName } from '@/lib/api';  
import PokemonTypeProfileCard from '@/app/components/Type/PokemonTypeProfileCard';
import SkeltonPokemonProfileCard from '@/app/components/skelton/SkeltonPokemonProfileCard';
import NotFound from '@/app/components/NotFound';
import fallbackDataType from '@/data/fallBackDataType';
import type { PokemonTypeDetail } from '@/types/pokemonTypeDetail';
import { useEffect } from 'react';
import { pokemonTypeNameID } from '@/data/pokemonTypeNameID';
import Button from '@/app/components/ui/Button';
import { getPrevNextItems } from '../../components/util/display';

const PokemonTypeProfileClient = ({ type }: { type: string }) => {
  const cachedData = typeof window !== 'undefined' ? localStorage.getItem(`type-${type}`) : null;
  const initialData = cachedData ? JSON.parse(cachedData) : fallbackDataType; // Use the fallback data

  const { data, error, isLoading, refetch } = useQuery<PokemonTypeDetail, Error>({
    queryKey: ['type', type],
    queryFn: () => fetchPokemonTypeByName(type),
    enabled: !!type,
    initialData, 
    retry: 3, // Retry once on failure
  });

  useEffect(() => {
    if (data) {
      localStorage.setItem(`type-${type}`, JSON.stringify(data));
    }
  }, [data, type]);

  if (isLoading) return <SkeltonPokemonProfileCard />;
  if (error) return <NotFound type='error' retry={refetch} />;
  if (!data) return <NotFound type='data' />;

  const { prev: previousType, next: nextType } = getPrevNextItems(pokemonTypeNameID, type);

  return (
    <>
      <PokemonTypeProfileCard type={data} />
      <div className='flex justify-center items-center gap-2 my-4'>
        <Button 
          link={`/type/${previousType}`}
          text='Previous'
          buttonClassName='text-lg'
          disabled={!previousType} // Disable button if there is no previous Type
        />
        <Button
          link={`/type/${nextType}`}
          text='Next'
          buttonClassName='text-lg'
          disabled={!nextType} // Disable button if there is no next Type
        />
      </div>
    </>
  );
}

export default PokemonTypeProfileClient;

