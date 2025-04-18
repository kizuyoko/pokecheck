import Card from "./ui/Card";
import Title from "./ui/Title";

type NotFoundProps = {
  type: "pokemon" | "search" | "page";
};

const messages = {
  pokemon: "The Pokémon you are looking for does not exist.",
  search: "No results found for your search.",
  page: "This page could not be found.",
};

export default function NotFound({ type = "page" }: NotFoundProps) {
  const message = messages[type];

  return (
    <Card className="p-10">
      <Title className="text-center mb-3">404 - Not Found</Title>
      <p className="text-lg text-center">
        {message}
      </p>
    </Card>
  );
}