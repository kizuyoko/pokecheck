interface PaginatorProps {
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  buttonText: string;
}

const Paginator = ({ onClick, className, disabled, buttonText }: PaginatorProps) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 bg-[var(--check-blue)] text-white rounded ${
        disabled ? 'opacity-50' : 'cursor-pointer hover:scale-105 hover:shadow-lg font-bold'
      } ${className}`}
      type="button"
      disabled={disabled}
      aria-label={buttonText}
      role="button"
      aria-disabled={disabled}
    >
      {buttonText}
    </button>
  );
};

export default Paginator;