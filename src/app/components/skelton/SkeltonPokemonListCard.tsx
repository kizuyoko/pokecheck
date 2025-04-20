import Card from "../ui/Card";


export default function SkeltonPokemonListCard() {
  return (
    <Card className="w-full">
      <div className="w-24 h-24 mx-auto skelton"></div>
      <div className="mt-4 max-w-full w-48 sm:w-48 h-6 skelton"></div>
      <div className="mt-2 w-16 h-4 skelton"></div>
    </Card>
  );
}