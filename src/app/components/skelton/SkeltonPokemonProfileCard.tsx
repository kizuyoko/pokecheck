import Card from "../ui/Card";
import SkeltonPokemonImageSection from "./SkeltonPokemonImageSection";
import SkeltonPokemonNameSection from "./SkeltonPokemonNameSection"; 
import SkeltonPokemonDetailSections from "./SkeltonPokemonDetailSections"; 


export default function SkeltonPokemonProfileCard() {
  return (
    <Card className="flex flex-col md:flex-row md:items-start gap-x-12">
      <div className="items-center flex justify-center">
        <SkeltonPokemonImageSection />
      </div>
      <div className="flex flex-col">
        <SkeltonPokemonNameSection />
        <div className="pokemon-details">
          <SkeltonPokemonDetailSections />
          <SkeltonPokemonDetailSections />
        </div>
      </div>
    </Card>
  );
}