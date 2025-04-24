"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useEffect } from "react"; 

interface SearchBarProps {
  classNameContainer?: string;
  classNameText?: string; 
  classNameIcon?: string;
  placeholder?: string;
}

let debounceTimer: NodeJS.Timeout | null = null;
const debouseDelay = 500; // Adjust the debounce delay as needed

export default function SearchBar({
  classNameContainer = "",
  classNameText = "text-lg",
  placeholder = "Search",
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  useEffect(() => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      setDebouncedQuery(query);
    }, debouseDelay); // Adjust the debounce delay as needed
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      router.push(`/search/${debouncedQuery}`);
    }
  }, [debouncedQuery, router]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      setDebouncedQuery(query);
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
        className={`input-text flex grow w-full focus:outline-none ${classNameText}`}
        value={query}
        onChange={handleInputChange}
      />
      <button 
        type="submit" 
        className="flex items-center text-2xl hover:scale-110 transition-transform"
      >
        🔍
      </button>
    </form>
  );
}