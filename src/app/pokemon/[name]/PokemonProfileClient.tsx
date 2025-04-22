'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchPokemonByName } from '@/lib/api';
import PokemonProfileCard from '@/app/components/Pokemon/PokemonProfileCard';
import SkeltonPokemonProfileCard from '@/app/components/skelton/SkeltonPokemonProfileCard';

const PokemonProfileClient = ({ name }: { name: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['pokemon', name],
    queryFn: () => fetchPokemonByName(name),
    enabled: !!name,
  });

  if (isLoading) return <SkeltonPokemonProfileCard />;
  if (error) return <p>データの取得に失敗しました😢</p>;
  if (!data) return <p>ポケモンが見つかりませんでした</p>;

  return <PokemonProfileCard pokemon={data} />;
};

export default PokemonProfileClient;
