import Link from "next/link";

interface Props {
  onClickLink?: () => void;
  onClickButton?: () => void;
  link?: string;
  linkClassName?: string;
  buttonClassName?: string;
  text?: string;
  disabled?: boolean;
};

const Button = ({ onClickLink, onClickButton, link, linkClassName, buttonClassName, text, disabled }: Props) => {

  const button = (
    <button
      onClick={onClickButton}
      className={`px-2 py-1 bg-[var(--check-blue)] text-white rounded ${buttonClassName} ${disabled ? 'opacity-50' : 'cursor-pointer hover:scale-105 hover:font-semibold hover:shadow-lg'}`}
      type="button"
      disabled={disabled}
      aria-label="Button"
      role="button"
      aria-disabled={disabled}
    >
      {text}
    </button>
  );

  return (
    link ? (
      <Link
        href={link}
        className={linkClassName}
        onClick={onClickLink}
        role="link"
        aria-label="Link Button"
      >
        {button}
      </Link>
    ) : button
  );  
};
export default Button;
