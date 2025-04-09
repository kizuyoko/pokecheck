import Image from "next/image";

interface SearchBarProps {
  classNameContainer?: string;
  classNameText?: string; 
  classNameIcon?: string;
  placeholder?: string;
}

export default function SearchBar({
  classNameContainer = "",
  classNameText = "text-lg",
  classNameIcon = "",
  placeholder = "Search",
}: SearchBarProps) {

  return (
    <form className={`input-container py-2 flex items-center gap-4 justify-between ${classNameContainer}`}>
      <input
        type="text"
        placeholder={placeholder}
        className={`input-text flex grow w-full max-w-xs focus:outline-none ${classNameText}`}
      />
      <button type="submit" className="flex items-center">
        <Image
          src="/search.svg"
          alt="Search"
          width={24}
          height={24}
          className={`mr-2 opacity-60 ${classNameIcon}`}
        />
      </button>
    </form>
  );
}