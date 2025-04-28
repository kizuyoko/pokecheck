'use client';
import { useState } from "react";
import Button from "../ui/Button";

interface Props {
  moves?: string[]
}

const PokemonMoveList = ({ moves}: Props) => {
  const [showAllMove, setshowAllMove] = useState(false);

  const maxToShowMoves = 16;

  if (!moves) {
    return null;
  }

  const displayedMoves = showAllMove ? moves : moves?.slice(0, maxToShowMoves);

  return (
    <>
      <h3 className="text-2xl">Moves</h3>
      <p className="pb-2 text-lg ">
        {displayedMoves.length > 0
          ? displayedMoves.map((move) => move).join(', ')
          : 'None'}
        {moves.length > maxToShowMoves && !showAllMove && '...'}
      </p>
      {moves.length > maxToShowMoves && (
        <Button
          onClickButton={() => setshowAllMove(!showAllMove)}
          text={showAllMove ? 'Show Less' : 'Show More'}
          buttonClassName="mb-4"
        />  
      )}
    </>
  );
}

export default PokemonMoveList;