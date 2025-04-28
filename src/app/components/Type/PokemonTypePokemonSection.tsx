'use client';
import { useState } from "react";
import Link from "next/link";
import Button from "../ui/Button";

interface Props {
  pokemon?: string[];
}

const PokemonTypePokemonSection = ({ pokemon }: Props) => {
  const [showAllPokemon, setshowAllPokemon] = useState(false);

  const maxToShowPokemon = 16;

  if (!pokemon) {
    return null;
  }

  const displayedPokemon = showAllPokemon ? pokemon : pokemon.slice(0, maxToShowPokemon);

  return (
    <div>
      <h3 className="text-2xl">Pokemons</h3>
      <p className="pb-2 text-lg">
        {displayedPokemon.length > 0
          ? displayedPokemon.map((pokemon, index) => (
              <span className="inline" key={pokemon}>
                {index > 0 && ", "}
                <Link
                  href={`/pokemon/${pokemon}`}
                  className="hover:text-[var(--check-blue)] hover:underline"
                >
                  {pokemon}
                </Link>
              </span>
            ))
          : "None"}
        {pokemon.length > maxToShowPokemon && !showAllPokemon && "..."}
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
