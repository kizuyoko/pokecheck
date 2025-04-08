interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

export default function Title({ className = "", children }: TitleProps) {
  return (
    <h2 className={`text-5xl ${className}`}>
      {children}
    </h2>
  );
}