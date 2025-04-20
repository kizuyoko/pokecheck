import FooterIcon from "./ui/FooterIcon";
export default function Footer() {
  return (
    <footer className="container mx-auto flex items-center gap-4 justify-center py-6">
      <FooterIcon
        href="https://github.com/kizuyoko/pokecheck"
        src="/github.svg"
        alt="GitHub"
      />
      <FooterIcon
        href="https://www.linkedin.com/in/kizuyoko"
        src="/linkedin.svg"
        alt="LinkedIn"
      />
    </footer>
  );
}