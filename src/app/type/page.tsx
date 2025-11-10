'use client';
import PokemonTypeList from "../components/Type/PokemonTypeList";
import Card from "../components/ui/Card";
import { usePokemonTypes } from "@/lib/hooks/usePokemonTypes";

const TypeIndexPage = () => {
  const { data: types = [], isLoading: isLoadingTypes, error: errorTypes } = usePokemonTypes();
  return (
    <Card>
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <h2>Pokémon Types</h2>
        <p className="mb-8">Click on a type to view its details.</p>
        <PokemonTypeList 
          types={types}
          isLoading={isLoadingTypes}
          error={errorTypes}
        />
      </div>
    </Card>
  );
}

export default TypeIndexPage;