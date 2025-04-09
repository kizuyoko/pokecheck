// src/app/components/Header.tsx
'use client';

import { usePathname } from 'next/navigation';
import Logo from './ui/Logo';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (isHome) return null;

  return (
    <header className="flex items-center justify-between p-4">
      <Logo />
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6F61]" />
    </header>
  );
}
