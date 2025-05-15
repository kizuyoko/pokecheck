'use client';
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

const FavoritePageLink = () => {
  const favorites = useSelector((state: RootState) => state.favorites);
  const hasFavorites = favorites.length > 0;

  return (
    <Link 
      href={"/favorites"}
      className="relative w-5 h-5"
    >
      <Image 
        src={hasFavorites ? '/heart_full.svg' : '/heart_empty.svg'}
        alt='Favorite'
        fill
        className="hover:scale-110 transition-transform"
      />
    </Link>
  );
}

export default FavoritePageLink;