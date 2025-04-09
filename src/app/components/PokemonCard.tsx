import Card from "./ui/Card";
import Image from "next/image";
import Link from "next/link";
interface PokemonCardProps {
  pokemon: {
    name: string;
    id: string;
  },
  className?: string;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const { name, id } = pokemon;
  const nameLower = name.toLowerCase();
  return (
    <Card href="/pokemon" className="w-full sm:w-48 lg:w-56">
      <Link href="/pokemon" className="w-full">
        <figure className="flex justify-center w-full">
          <Image
            src={`/${nameLower}.png`}
            alt={name}
            width={96}
            height={96}
          />
        </figure>
        <h3>{name}</h3>
        <p className="text-gray-500">#{id}</p>
      </Link>
    </Card>
  );
}