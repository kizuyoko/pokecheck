"use client";
import { useState } from "react";
import PokemonListCard from "./PokemonListCard";
import type { PokemonSimpleData } from "@/types/pokemon";
import SkeltonPokemonListCard from "../skelton/SkeltonPokemonListCard";
import PageInfoBar from "../ui/PageInfoBar";

interface PokemonListProps {
  list: PokemonSimpleData[];
}

const PokemonList = ({ list }: PokemonListProps) => {
  const isLoading = false;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(list.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedList = list.slice(startIndex, endIndex);

  const setPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const setNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <PageInfoBar
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={list.length}
        onPreviousPage={setPreviousPage}
        onNextPage={setNextPage}
      />
      <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
        {
          paginatedList.map((pokemon: PokemonSimpleData, index: number) => (
            isLoading ? (
              <SkeltonPokemonListCard
                key={pokemon.id}
              />
            ) : (
              <PokemonListCard 
                pokemon={pokemon}
                key={pokemon.id}
                isPriority={index === 0}
              /> 
            )
          ))
        }
      </div>
      <PageInfoBar
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={list.length}
        onPreviousPage={setPreviousPage}
        onNextPage={setNextPage}
      />
    </>
  );
};

export default PokemonList;