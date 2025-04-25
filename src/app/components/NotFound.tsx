import Card from "./ui/Card";
import Title from "./ui/Title";

type NotFoundProps = {
  type: "pokemon" | "search" | "page" | "error" | "data";
  retry?: () => void; // Optional retry function for error type
};

const messages = {
  pokemon: "The Pokémon you are looking for does not exist.",
  search: "No results found for your search.",
  page: "This page could not be found.",
  error: "An error occurred while fetching the data.",
  data: "No data available.",
};

export default function NotFound({ type = "page", retry }: NotFoundProps) {
  const message = messages[type];

  return (
    <Card className="p-10 flex flex-col items-center justify-center">
      <Title className="text-center mb-3">404 - Not Found</Title>
      <p className="text-lg text-center">
        {message}
      </p>
      {type === 'error' && retry && (
        <button onClick={retry} className="mt-4 px-3 py-2 bg-[var(--check-blue)] text-white rounded cursor-pointer hover:scale-105 hover:font-semibold hover:shadow-lg text-xl">
          Retry
        </button>
      )}
    </Card>
  );
}