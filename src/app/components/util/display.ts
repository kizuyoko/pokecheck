export function diplayId(id: number) {
  return id.toString().padStart(4, "0");
}

export function displayGender(gender: number): string{
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
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  return imageUrl;
}

// Define the type for Pokémon objects
type Pokemon = {
  name: string;
  id: number;
};

// Update the function to use the Pokemon type
export function getRandomPokemons(count: number, list: Pokemon[]): Pokemon[] {
  const shuffled = [...list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
