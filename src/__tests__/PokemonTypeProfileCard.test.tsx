import { render, screen } from '@/test-utils';
import PokemonTypeProfileCard from '@/app/components/Type/PokemonTypeProfileCard';
import { pokemonTypeExample } from '@/data/pokemonTypeExample';

/* eslint-disable @next/next/no-img-element */
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => {
    // Destructure to omit 'priority' without assigning a new variable
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { priority, ...rest } = props;
    return <img {...rest} alt={props.alt || ''} />;
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