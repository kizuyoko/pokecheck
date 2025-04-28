import React from "react";
import TypeIcon from "../ui/TypeIcon";
import { displayGender } from "../util/display";
import { PokemonType } from "@/types/pokemon";

type Props = {
  height: number;
  weight: number;
  types: PokemonType[];
  gender_rate: number;
  genera: string[];
};  

const PokemonBasicInfoSection = ({ height, weight, types, gender_rate, genera }: Props) => {
  const genderToDisplay = displayGender(gender_rate);

  return (
    <div>
      <div className="pokemon-property">
        <h3>
          <span>Height: </span>
          <strong>{(height / 10).toFixed(1)} meters</strong>
        </h3>
      </div>
      <div className="pokemon-property">
        <h3>
          <span>Weight: </span>
          <strong>{(weight / 10).toFixed(1)} kg</strong>
        </h3>
      </div>
      
      <div className="pokemon-property flex">
        <h3 className="pr-2">
          <span>Types: </span>
        </h3>
        <div className="flex gap-4 mt-2">
          {types.map((type) => (
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
          <strong>{genera.join(", ")}</strong>
        </h3>
      </div>
    </div>
  );
};

export default PokemonBasicInfoSection;