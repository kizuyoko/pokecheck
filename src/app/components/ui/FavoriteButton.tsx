'use client';
import { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isFavorite = favorites.includes(name);

const imageSrc = isHovered
  ? (isFavorite ? '/heart_empty.svg' : '/heart_full.svg')
  : (isFavorite ? '/heart_full.svg' : '/heart_empty.svg');

  const imageAlt = isFavorite ? 'Favorite' : 'Not favorite yet';

  return (
    <button 
      onClick={() => dispatch(toggleFavorite(name))}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`cursor-pointer ${classsNameButton}`}
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