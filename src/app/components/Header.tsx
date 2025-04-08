// src/app/components/Header.tsx
'use client';

import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (isHome) return null;

  return (
    <header className="flex items-center justify-between p-4">
      <h1 className="font-bungee text-2xl text-[#FF6F61]">PokeCheck</h1>
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6F61]" />
    </header>
  );
}
