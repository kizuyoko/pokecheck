interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

const Title = ({ className = "", children }: TitleProps) => {
  return (
    <h2 className={className}>
      {children}
    </h2>
  );
}

export default Title;