'use client';
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/store";

type PropType = {
  text: string;
  href: string;
  iconSrc?: string;
  isFavorite?: boolean;
  imageSize: number;
}

const MenuItem = ({ text, href, iconSrc, isFavorite, imageSize }: PropType) => {
  const favorites = useSelector((state: RootState) => state.favorites);

  let iconSrcToShow = '';

  if (isFavorite) {
    const hasFavorites = isFavorite ? favorites.length > 0: null;
    iconSrcToShow = hasFavorites ? '/heart_full.svg' : '/heart_empty.svg'
  } else {
    iconSrcToShow = iconSrc ?? '';
  }


  return (
    <li>
      <Link href={href} className="group">
        <div className="flex flex-col items-center justify-center gap-1 transition-transform group-hover:scale-110 h-7">
        {
          iconSrcToShow ? (
            <Image 
              src={iconSrcToShow}
              alt=""
              aria-hidden="true"
              width={imageSize}
              height={imageSize}
              className="transition-transform"
            />
          ) : null
        }
        </div>
        <span className="text-sm transition-all group-hover:underline underline-offset-4">{text}</span>
      </Link>
    </li>
  );
}

export default MenuItem;