import { useQuery } from "@tanstack/react-query";
import { fetchOwnServerTypes } from "../api";
import { PokemonTypeData } from "@/types/pokemon";

export const usePokemonTypes = () => {
  return useQuery<PokemonTypeData[], Error>({
    queryKey: ["pokemonTypes"],
    queryFn: fetchOwnServerTypes,
  });
};
