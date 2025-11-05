import { render, screen } from '@/test-utils';
import '@testing-library/jest-dom'; 
import PokemonProfileCard from '@/app/components/Pokemon/PokemonProfileCard';
import pokemonList from '@/data/pokemonList';

const dummyPokemon = pokemonList[0];

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
  it('renders a Pokémon name', () => {
    render(<PokemonProfileCard pokemon={dummyPokemon} />);
    expect(screen.getByRole('heading', { name: /Bulbasaur/i })).toBeInTheDocument();
  });

  it('renders a Pokémon ID', () => {
    render(<PokemonProfileCard pokemon={dummyPokemon} />);
    expect(screen.getByText(/#0001/i)).toBeInTheDocument();
  });

  it('renders a Pokémon image', () => {
    render(<PokemonProfileCard pokemon={dummyPokemon} />);
    const image = screen.getByAltText(/bulbasaur/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png');
  });

  it('renders the image with correct dimensions', () => {
    render(<PokemonProfileCard pokemon={dummyPokemon} />);
    const image = screen.getByAltText(/bulbasaur/i);
    expect(image).toHaveAttribute('width', '343');
    expect(image).toHaveAttribute('height', '343');
  });
  
  it ('renders Pokémon height and weight', () => {
    render(<PokemonProfileCard pokemon={dummyPokemon} />);  
    expect(screen.getByText(/0.7/i)).toBeInTheDocument();
    expect(screen.getByText(/6.9/i)).toBeInTheDocument();
  });

  it('renders Pokémon types', () => {
    render(<PokemonProfileCard pokemon={dummyPokemon} />);
    expect(screen.getByText(/grass/i)).toBeInTheDocument();
    expect(screen.getByText(/poison/i)).toBeInTheDocument();
  });

  it ('renders Pokémon genders', () => {
    render(<PokemonProfileCard pokemon={dummyPokemon} />);
    expect(screen.getByText(/male/i)).toBeInTheDocument();
    expect(screen.getByText(/female/i)).toBeInTheDocument();
  });

  it ('renders Pokémon Category', () => {
    render(<PokemonProfileCard pokemon={dummyPokemon} />);
    expect(screen.getByText(/seed/i)).toBeInTheDocument();
  });  

  it ('renders Pokémon abilities', () => {  
    render(<PokemonProfileCard pokemon={dummyPokemon} />);
    expect(screen.getByText(/overgrow/i)).toBeInTheDocument();
    expect(screen.getByText(/chlorophyll/i)).toBeInTheDocument();
  }
  );

  it('renders Pokémon stats', () => {
    render(<PokemonProfileCard pokemon={dummyPokemon} />);
    expect(screen.getByText(/hp/i)).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<PokemonProfileCard pokemon={dummyPokemon} />);
    expect(asFragment()).toMatchSnapshot();
  }); 

});