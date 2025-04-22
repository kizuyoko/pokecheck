export async function fetchPokemonByName(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (!res.ok) {
    throw new Error(`Failed Pokèmon ${name} fetching.`);
  }
  return res.json();
}
