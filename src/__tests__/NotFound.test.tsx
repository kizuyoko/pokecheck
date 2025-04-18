import  { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from "@/app/components/NotFound";

describe('NotFound', () => {
  it('renders the NotFound component', () => {
    render(<NotFound type={'page'} />);
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });

  it('renders the NotFound default page with the correct message', () => {
    render(<NotFound type={'page'} />);
    expect(screen.getByText(/This page could not be found./i)).toBeInTheDocument();
  });

  it('renders the NotFound pokemon page with the correct message', () => {
    render(<NotFound type={'pokemon'} />);
    expect(screen.getByText(/The Pokémon you are looking for does not exist./i)).toBeInTheDocument();
  });

  it('renders the NotFound search page with the correct message', () => {
    render(<NotFound type={'search'} />);
    expect(screen.getByText(/No results found for your search./i)).toBeInTheDocument();
  });
});