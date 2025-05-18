'use client';
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/stores/store";
import { toggleFavorite } from "@/stores/favoritesSlice";
import Image from "next/image";

type Props = { 
  name: string;
  classsNameButton?: string; 
  classNameImage?: string;
  size?: number
};

const FavoriteButton = ({ name, classsNameButton, classNameImage, size=20 }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.includes(name);

const imageSrc = isFavorite
  ? '/heart_full.svg'
  : '/heart_empty.svg'

  const imageAlt = isFavorite ? 'Favorite' : 'Not favorite yet';

  return (
    <button 
      onClick={() => dispatch(toggleFavorite(name))}
      className={`cursor-pointer w-10 h-10 flex items-center justify-center ${classsNameButton}`}
      aria-label="Toggle favorite"
    >
      <Image 
        src={imageSrc}
        alt={imageAlt}
        width={size}
        height={size}
        className={`transform transition-transform duration-300 hover:scale-115 z-50 ${classNameImage}`}
      /> 
    </button>
  );
};

export default FavoriteButton;