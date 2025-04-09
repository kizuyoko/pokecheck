// src/app/components/Header.tsx
'use client';

import { usePathname } from 'next/navigation';
import Logo from './ui/Logo';
import SearchBar from './SearchBar';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (isHome) return null;

  return (
    <header className="container mx-auto flex flex-col sm:flex-row sm:justify-between py-4 items-center gap-4">
      <Logo />
      <SearchBar />
    </header>
  );
}
