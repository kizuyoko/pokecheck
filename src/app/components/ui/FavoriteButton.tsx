'use client';
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/stores/store";
import { toggleFavorite } from "@/stores/favoritesSlice";
import Image from "next/image";

type Props = { name: string };

const FavoriteButton = ({ name }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.includes(name);

  return (
    <button 
      onClick={() => dispatch(toggleFavorite(name))}
      className="cursor-pointer"
    >
      {
        isFavorite 
          ? <Image 
              src='/heart_full.svg'
              alt='Favorite'
              width={20}
              height={20}
            /> 
          : <Image 
              src='/heart_empty.svg'
              alt='Not favorite yet'
              width={20}
              height={20}
            />
      }
    </button>
  );
};

export default FavoriteButton;