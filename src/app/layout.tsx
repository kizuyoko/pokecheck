import type { Metadata } from "next";
import { Bungee, Baloo_2 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

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
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">    
      <body
        className={`${bungee.variable} ${baloo2.variable} antialiased`}
      > 
        <Header />
        <main className="max-w-screen-lg mx-auto px-4">{children}</main>
      </body> 
    </html>
  );
}
