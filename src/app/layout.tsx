import type { Metadata } from "next";
import { Bungee, Baloo_2 } from "next/font/google";
import "./globals.css";

import ClientProviders from "./components/ClientProviders";
import Header from "./components/Header";
import Footer from "./components/Footer";

const bungee = Bungee({
  weight: "400", // Regular
  subsets: ["latin"],
  variable: "--font-bungee",
})

const baloo2 = Baloo_2({
  weight: ["400", "600"], // Regular & SemiBold
  subsets: ["latin"],
  variable: "--font-baloo2",
})

export const metadata: Metadata = {
  title: {
    default: 'PokeCheck',
    template: '%s | PokeCheck',
  },
  description: 'PokeCheck is a web application that provides information about Pokémon, including their abilities, types,  category, and so on.',
  keywords: ['Pokémon', 'PokeCheck', 'Pokédex', 'Abilities', 'Types', 'Category'],
  openGraph: {
    title: 'PokeCheck',
    description: 'PokeCheck is a web application that provides information about Pokémon, including their abilities, types,  category, and so on.',
    url: 'https://pokecheck-two.vercel.app',
    siteName: 'PokeCheck',  
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PokeCheck',
    description: 'PokeCheck is a web application that provides information about Pokémon, including their abilities, types,  category, and so on.' 
  },   
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">    
      <body
        className={`flex flex-col min-h-screen ${bungee.variable} ${baloo2.variable} antialiased`}
      > <ClientProviders>
          <Header />
          <main className="container mx-auto flex-grow">    
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}
