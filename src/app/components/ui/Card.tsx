interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
} 

const cardStyles = {
  base: "card text-left",
};

const Card = ({ children, className = "" }: CardProps) => {
  return (
    <article className={`w-full ${cardStyles.base} ${className}`}>
      {children}
    </article>
  ); 
}

export default Card;