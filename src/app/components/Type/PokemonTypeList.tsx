'use client'
import { useEffect, useState } from 'react';
import { PokemonTypeData } from '@/types/pokemon';
//import { pokemonTypeNameID } from "@/data/pokemonTypeNameID";
import { typeToDisplay } from "../util/display";
import TypeIcon from "../ui/TypeIcon";

const PokemonTypeList = () => {
  const [types, setTypes] = useState<PokemonTypeData[]>([]);

  useEffect(() => {
    const baseUrl =
      process.env.NODE_ENV === 'production'
        ? 'https://pokecheck-ssh3.onrender.com'
        : 'http://localhost:3001';

    fetch(`${baseUrl}/api/types`)
      .then(res => res.json())
      .then((data: PokemonTypeData[]) => setTypes(data))
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="grid grid-cols-4 sm:grid-cols-9 md:gap-6 gap-4">
      {types.map((type) => (
        <div key={type.id} className="flex flex-col items-center gap-1">
          <TypeIcon 
            type={type.name}
            size={42}
            className="w-8 h-8 sm:w-12 sm:h-12"
          />
          <p className="text-gray-500 dark:text-gray-200">{typeToDisplay(type.name)}</p>
        </div>      
      ))}
    </div>
  );
};
export default PokemonTypeList;