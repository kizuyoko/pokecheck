import Link from "next/link";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "" }: LogoProps) => {  
  return (
    <Link href="/" className="">
      <h1 className={`text-4xl ${className}`}>
      Poké<span>Check</span>
      </h1>
    </Link>
  );
}

export default Logo;