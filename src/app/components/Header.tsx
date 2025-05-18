'use client';

import { usePathname } from 'next/navigation';
import Logo from './ui/Logo';
import SearchBar from './SearchBar';
import SkeltonSearchBar from './skelton/SkeltonSearchBar';
import Menu from './Menu';

export default function Header() {
  const isLoading = false;  
  const pathname = usePathname();
  const isHome = pathname === '/';

  if (isHome) return null;

  return (
    <header className="container mx-auto flex flex-col md:flex-row sm:justify-between py-4 items-center gap-4">
      <div className='flex grow'>
        <Logo />      
      </div>
      <Menu />
      {isLoading ? (
        <SkeltonSearchBar 
          classNameContainer='sm:w-[292px]'        
        />
      ) : (
        <SearchBar />
      )} 
    </header>
  );
}
