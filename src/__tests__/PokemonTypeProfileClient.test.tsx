import { render, screen } from '@/test-utils';
import PokemonTypeProfileClient from '@/app/pokemon/[name]/PokemonProfileClient';

describe('PokemonTypeProfileClient', () => {
  it('renders fallback data', async () => {
    render(<PokemonTypeProfileClient name="fallback" />);
    const typeName = await screen.findByRole('heading', {
      level: 2, 
    });
    expect(typeName).toHaveTextContent(/unknown/i);
  });  

  it('displays error message when data fetch fails', async () => {
    render(<PokemonTypeProfileClient name="error" />);

    const errorMessage = await screen.findByText((content, element) => {
      return element?.tagName === 'P' && content.includes('0000');
    });

    expect(errorMessage).toBeInTheDocument();
  });
});
