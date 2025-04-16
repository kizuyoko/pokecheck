import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonListCard from '@/app/components/List/PokemonListCard';
import pokemonList from '@/data/pokemonList'; 

describe('PokemonListCard', () => {
  it('renders a Pokémon name', () => {
    render(<PokemonListCard pokemon={pokemonList[0]} />);
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument();
  });
});
