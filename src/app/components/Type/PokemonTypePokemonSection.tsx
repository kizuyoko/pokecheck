'use client';
import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";

interface Props {
  pokemon?: {
    name: string;
    url: string;
  }[];
}

const PokemonTypePokemonSection = ({ pokemon }: Props) => {
  const [showAllPokemon, setshowAllPokemon] = useState(false);

  const maxToShowPokemon = 16;

  if (!pokemon) {
    return null;
  }

  const displayedPokemon = showAllPokemon ? pokemon : pokemon.slice(0, maxToShowPokemon);

  return (
    <div className="pokemon-property max-w-[380px]">
      <h3 className="text-2xl">Pokemons</h3>
      <p className="pb-2 text-lg">
        {displayedPokemon.length > 0
          ? displayedPokemon.map((pokemon, index) => (
              <span className="inline" key={pokemon.name}>
                {index > 0 && ", "}
                <Link
                  href={`/pokemon/${pokemon.name}`}
                  className="hover:text-[var(--check-blue)] hover:underline"
                >
                  {pokemon.name}
                </Link>
              </span>
            ))
          : "None"}...
      </p>
      {pokemon.length > maxToShowPokemon && (
        <Button
          onClickButton={() => setshowAllPokemon(!showAllPokemon)}
          text={showAllPokemon ? "Show Less" : "Show More"}
          buttonClassName="mb-4"
        />
      )}
    </div>
  );
};

export default PokemonTypePokemonSection;
