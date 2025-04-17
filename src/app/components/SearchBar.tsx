"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react"; 

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

  const router = useRouter();
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      router.push(`/search/${query}`);
    }
  };

  return (
    <form 
      className={`input-container py-2 flex items-center gap-2 justify-between ${classNameContainer}`}
      onSubmit={handleSubmit}
      role="form"
    >
      <input
        type="text"
        placeholder={placeholder}
        className={`input-text flex grow w-full  focus:outline-none ${classNameText}`}
        value={query}
        onChange={handleInputChange}
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