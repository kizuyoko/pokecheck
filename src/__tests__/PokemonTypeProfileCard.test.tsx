import { render, screen } from '@testing-library/react';
import PokemonTypeProfileCard from '@/app/components/Type/PokemonTypeProfileCard';
import { pokemonTypeExample } from '@/data/pokemonTypeExample';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img alt={props.alt || 'Image'} {...props} />;
  },
}));

describe('PokemonProfileCard', () => {
  it('renders a Pokémon type name', () => {
    render(<PokemonTypeProfileCard type={pokemonTypeExample} />);
    expect(screen.getByRole('heading', { name: /normal/i })).toBeInTheDocument();
  });
  it ('renders Pokémon type to be Double Damage from', () => {
    render(<PokemonTypeProfileCard type={pokemonTypeExample} />);  
    expect(screen.getByText(/fighting/i)).toBeInTheDocument();
  });
  it('renders Pokemon', () => {
    render(<PokemonTypeProfileCard type={pokemonTypeExample} />);
    expect(screen.getByText(/Pidgey/i)).toBeInTheDocument();
  })
  it('renders moves', () => {
    render(<PokemonTypeProfileCard type={pokemonTypeExample} />);
    expect(screen.getByText(/Pound/i)).toBeInTheDocument();
  })
});