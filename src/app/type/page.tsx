import PokemonTypeList from "../components/Type/PokemonTypeList";
import Card from "../components/ui/Card";

const TypeIndexPage = () => {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center gap-4 p-4">
        <h2>Pokémon Types</h2>
        <p className="mb-8">Click on a type to view its details.</p>
        <PokemonTypeList />
      </div>
    </Card>
  );
}

export default TypeIndexPage;