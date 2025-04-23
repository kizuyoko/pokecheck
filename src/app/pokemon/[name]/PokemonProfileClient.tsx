'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPokemonByName } from '@/lib/api';
import PokemonProfileCard from '@/app/components/Pokemon/PokemonProfileCard';
import SkeltonPokemonProfileCard from '@/app/components/skelton/SkeltonPokemonProfileCard';
import NotFound from '@/app/components/NotFound';

const PokemonProfileClient = ({ name }: { name: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemonByName(name),
    enabled: !!name,
  });

  if (isLoading) return <SkeltonPokemonProfileCard />;
  if (error || !data) return <NotFound type='pokemon' />;

  return <PokemonProfileCard pokemon={data} />;
};

export default PokemonProfileClient;
