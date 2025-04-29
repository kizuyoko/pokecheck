import { render, screen } from '@testing-library/react';
import PokemonTypeProfileClient from '@/app/pokemon/[name]/PokemonProfileClient';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const renderWithQueryClient = (ui: React.ReactNode) => {
  return render(
    <QueryClientProvider client={queryClient}>
      {ui}
    </QueryClientProvider>
  );
}

describe('PokemonTypeProfileClient', () => {
  it('renders fallback data', async () => {
    renderWithQueryClient(<PokemonTypeProfileClient name="fallback" />);
    const typeName = await screen.findByRole('heading', {
      level: 2, 
    });
    expect(typeName).toHaveTextContent(/unknown/i);
  });  

  it('displays error message when data fetch fails', async () => {
    const spy = jest.spyOn(queryClient, 'getQueryData');
    spy.mockReturnValueOnce(undefined); // Simulate a failed fetch
    renderWithQueryClient(<PokemonTypeProfileClient name="error" />);
    const errorMessage = await screen.findByText(/0000/i);
    expect(errorMessage).toBeInTheDocument(); 
  });
});
