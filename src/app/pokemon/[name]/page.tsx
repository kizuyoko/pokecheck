import { notFound } from "next/navigation";
import Card from "../../components/ui/Card";
import Image from "next/image";
import pokemonList from "../../data/pokemonList";
import { diplayId, displayGender, displayImageUrl} from "../../components/util/display";
import TypeIcon from "../../components/ui/TypeIcon";

interface PageProps {
  params: Promise<{ name: string }>;
}

export async function generateStaticParams() {
  return pokemonList.map((p) => ({ name: p.name.toLowerCase() }));
}

const PokemonPage = async ({ params }: PageProps) => {
  const { name } = await params;

  // Find the Pokémon by name from the pokemonList
  const pokemon = pokemonList.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );

  if (!pokemon) {
    notFound(); // Show a 404 page if Pokémon is not found
  }

  const idToDisplay = diplayId(pokemon.id);
  const genderToDisplay = displayGender(pokemon.gender_rate);
  const imageURL = displayImageUrl(pokemon.id); 

  return (
    <Card className="flex flex-col md:flex-row md:items-start gap-x-12">
      <div className="items-center flex justify-center">
        <Image
          src={imageURL}
          alt={pokemon.name}
          width={343}
          height={343}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="sm:pt-6">{pokemon.name}</h2>
        <p className="text-gray-500">#{idToDisplay}</p>
        <div className="pokemon-details">
          <div>
            <div className="pokemon-property">  
              <h3><span>Height: </span>
                  <strong>{(pokemon.height / 10).toFixed(1)} meters</strong>
              </h3>  
            </div>  
            <div className="pokemon-property">  
              <h3>
                <span>Weight: </span>
                  <strong>{(pokemon.weight / 10).toFixed(1)} kg</strong>
              </h3>
            </div>  
            <div className="pokemon-property flex">
              <h3 className="pr-2"><span>Types: </span></h3>
              <div className="flex gap-4 mt-2">
                {pokemon.types.map((type) => (
                  <div
                    key={type}
                    className="gap-1 flex flex-col items-center text-center"
                  >  
                    <TypeIcon type={type} />
                    <p>{type}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="pokemon-property">
              <h3>
                <span>Gender: </span>
                <strong>{genderToDisplay}</strong>
              </h3>
            </div>  
            <div className="pokemon-property">
              <h3>
                <span>Category: </span>
                <strong>{pokemon.genera.join(", ")}</strong>  
              </h3>
            </div>  
          </div>
          <div>    
            <div className="pokemon-property">
              <h3>Abilities:</h3>
              <ul className="list-disc list-inside">
                {pokemon.abilities.map((ability) => (
                  <li key={ability}>{ability}</li>
                ))}
              </ul>     
            </div>
            <div className="pokemon-property">  
              <h3>Stats</h3>
              <ul className="list-disc list-inside">
                {pokemon.stats.map((stat) => (
                  <li key={stat.stat}>
                    {stat.stat}: {stat.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>  
        </div>
      </div>
    </Card>
  );
}

export default PokemonPage;