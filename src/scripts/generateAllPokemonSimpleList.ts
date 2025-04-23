import fs from 'fs';

async function fetchAllPokemon() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1300'); 
  const data = await res.json();
  const list = data.results.map((p: { name: string }, i: number) => ({
    id: i + 1,
    name: p.name,
  }));

  fs.writeFileSync('src/data/allPokemon.json', JSON.stringify(list, null, 2));
}

fetchAllPokemon();