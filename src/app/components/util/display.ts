import { PokemonSimpleData } from "@/types/pokemon";
import { POKEMON_IMAGE_URL } from "@/lib/constans";
import type { PokemonGender } from "@/types/pokemon";
import type { PokemonType } from "@/types/pokemon";

export function displayId(id: number) {
  return id.toString().padStart(4, "0");
}

export function displayGender(gender: PokemonGender): string{
  switch (gender) {
    case -1: 
      return "Unknown";
    case 0: 
      return "Male";
    case 8:
      return "Female";
    default: 
      return "Male, Female";
  }
}

export function displayImageUrl(id:number): string {
  let imageUrl = `${POKEMON_IMAGE_URL}/${id}.png`;
  if (id === 0) {
    imageUrl = `/pokeball.svg`;
  }
  return imageUrl;
}

// Update the function to use the Pokemon type
export function getRandomPokemons(count: number, list: PokemonSimpleData[]): PokemonSimpleData[] {
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function typeToDisplay(type: PokemonType): string {
  return type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
}
