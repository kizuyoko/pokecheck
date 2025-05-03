"use client";
import { useRouter } from "next/navigation";
import { useState, FormEvent, useEffect } from "react"; 
import Image from "next/image";

interface SearchBarProps {
  classNameContainer?: string;
  classNameText?: string; 
  classNameIcon?: string;
  placeholder?: string;
}

const debouseDelay = 500; // Adjust the debounce delay as needed

export default function SearchBar({
  classNameContainer = "",
  classNameText = "text-lg",
  placeholder = "Search",
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [debouncedQuery, setDebouncedQuery] = useState<string>("");

  // Debounce query input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query.trim());
    }, debouseDelay);

    return () => clearTimeout(timer);
  }, [query]);

  // Navigate on debounced query change
  useEffect(() => {
    if (!debouncedQuery) return;
    setIsLoading(true);
    router.push(`/search/${debouncedQuery}`);
    const loadingTimer = setTimeout(() => setIsLoading(false), 500); // adjust if needed
    return () => clearTimeout(loadingTimer);
  }, [debouncedQuery, router]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      setIsLoading(true);
      router.push(`/search/${trimmedQuery}`);
      setQuery(""); // Optional: clear input
      setDebouncedQuery(""); // Prevent double fire from debounced effect
      setTimeout(() => setIsLoading(false), 500); // adjust duration as needed
    }
  };

  return (
    <div>
      <form 
        className={`input-container py-2 flex items-center gap-2 justify-between ${classNameContainer}`}
        onSubmit={handleSubmit}
        role="form"
      >
        <input
          type="text"
          placeholder={placeholder}
          className={`input-text flex grow focus:outline-none ${classNameText}`}
          value={query}
          onChange={handleInputChange}
        />
        <button 
          type="submit" 
          className="flex items-center hover:scale-110 transition-transform"
        >
          <Image  
            src="/search.svg"
            width={20}
            height={20}
            alt="Search"
            className="dark:filter dark:invert"
          />
        </button>
      </form>
      {isLoading && 
        <div className="w-full flex justify-center items-center py-2">
          <span className="text-sm text-gray-500 animate-pulse">Loading...</span>
        </div>
      }
    </div>
  );
}