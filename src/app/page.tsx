import Image from "next/image";
import Card from "./components/ui/Card";
import Logo from "./components/ui/Logo";
import Title from "./components/ui/Title";

export default function Home() {
  return (
    <section className="py-8 flex flex-col items-center gap-6 text-center">
      <Logo className="sm:pt-20 sm:text-8xl" />
      <input type="text" placeholder="Search Pokémon" />

      <Title className="text-xl">Featured Pokémon</Title>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <Image
            src="/bulbasaur.png"
            alt="Bulbasaur"
            width={96}
            height={96}
          />
          <h2>Bulbasaur</h2>
          <p className="text-gray-500">#0001</p>
        </Card>
        <Card>
          <Image
            src="/bulbasaur.png"
            alt="Bulbasaur"
            width={96}
            height={96}
          />
          <h2>Bulbasaur</h2>
          <p className="text-gray-500">#0001</p>
        </Card>

        <Card>
        <Image
            src="/bulbasaur.png"
            alt="Bulbasaur"
            width={96}
            height={96}
          />
          <h2>Bulbasaur</h2>
          <p className="text-gray-500">#0001</p>
        </Card>

        <Card>
        <Image
            src="/bulbasaur.png"
            alt="Bulbasaur"
            width={96}
            height={96}
          />
          <h2>Bulbasaur</h2>
          <p className="text-gray-500">#0001</p>
        </Card>
      </div>
    </section>
  );
}
