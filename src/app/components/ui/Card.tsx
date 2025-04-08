import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
} 

export default function Card({ children, href = "", className = "" }: CardProps) {
  return href ? (
    <Link href={href}>
      <article className={`card ${className}`}>
        {children}
      </article>
    </Link>
  ) : (
    <article className={`card ${className}`}>
      {children}
    </article>
  ); 
}