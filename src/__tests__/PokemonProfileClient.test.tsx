import { render, screen } from '@testing-library/react';
import PokemonProfileClient from '@/app/pokemon/[name]/PokemonProfileClient';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import fallbackDataPokemon from '@/data/fallBackData';

const queryClient = new QueryClient();

const renderWithQueryClient = (ui: React.ReactNode) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
}

describe('PokemonProfileClient', () => {
  it('renders fallback data', async () => {
    renderWithQueryClient(<PokemonProfileClient name="fallback" />);
    const pokemonName = await screen.findByRole('heading', {
      level: 2, 
    });
    expect(pokemonName).toHaveTextContent(fallbackDataPokemon.name);
  });  

  it('displays error message when data fetch fails', async () => {
    const spy = jest.spyOn(queryClient, 'getQueryData');
    spy.mockReturnValueOnce(undefined); // Simulate a failed fetch
    renderWithQueryClient(<PokemonProfileClient name="error" />);
    const errorMessage = await screen.findByText(/0000/i);
    expect(errorMessage).toBeInTheDocument(); 
  });

});