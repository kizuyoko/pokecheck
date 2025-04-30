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
  if (id === 0 || (id > 10263 && id < 10272)) {
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

export function formatTitle(key: string): string {
  // Convert the key to a more readable format
  // For example: "double_damage_from" -> "Double Damage From"
  return key
    .replace(/_/g, ' ') 
    .replace(/\b\w/g, (char) => char.toUpperCase()); 
};

export const getPrevNextItems = (
  list: { name: string }[],
  currentName: string
): { prev: string | null; next: string | null } => {
  const currentIndex = list.findIndex(
    (item) => item.name.toLowerCase() === currentName.toLowerCase()
  );

  const prev = currentIndex > 0 ? list[currentIndex - 1].name : null;
  const next = currentIndex < list.length - 1 ? list[currentIndex + 1].name : null;

  return { prev, next };
};