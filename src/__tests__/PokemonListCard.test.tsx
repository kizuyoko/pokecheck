import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonListCard from '@/app/components/List/PokemonListCard';
import pokemonList from '@/data/pokemonList'; 

const dummyPokemon = pokemonList[0];

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={props.alt || 'Image'} {...props} />;
  },
}));

describe('PokemonListCard', () => {
  it('renders a Pokémon name', () => {
    render(<PokemonListCard pokemon={dummyPokemon} />);
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });

  it('renders a Pokémon ID', () => {
    render(<PokemonListCard pokemon={dummyPokemon} />);
    expect(screen.getByText(/#0001/i)).toBeInTheDocument();
  });

  it('renders a Pokémon image', () => {
    render(<PokemonListCard pokemon={dummyPokemon} />);
    const image = screen.getByAltText(/bulbasaur/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png');
  });

  it('renders a link to the Pokémon details page', () => {
    render(<PokemonListCard pokemon={dummyPokemon} />);
    const link = screen.getByRole('link', { name: /bulbasaur/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/pokemon/bulbasaur');
  });

  it('renders the card with the correct structure', () => {
    render(<PokemonListCard pokemon={dummyPokemon} />);
    const card = screen.getByRole('link', { name: /bulbasaur/i });
    expect(card).toHaveClass('w-full');
  });

  it('renders the image with correct dimensions', () => {
    render(<PokemonListCard pokemon={dummyPokemon} />);
    const image = screen.getByAltText(/bulbasaur/i);
    expect(image).toHaveAttribute('width', '120');
    expect(image).toHaveAttribute('height', '120');
  });

  it('Shows the correct Pokémon Type', () => {
    render(<PokemonListCard pokemon={dummyPokemon} />);
    const type = screen.getByText(/grass/i);
    expect(type).toBeInTheDocument();
  });
});
