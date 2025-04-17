import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from '@/app/components/SearchBar'; 
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

describe('SearchBar', () => {
  it('renders the search bar with default props', () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  }); 

  it('updates the input value when typing', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/search/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Pikachu' } });
    expect(input.value).toBe('Pikachu');
  });

  it('calls router.push on submit with non-empty input', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    render(<SearchBar />);  
    const input = screen.getByPlaceholderText(/search/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'pikachu' } });

    const form = screen.getByRole('form') || document.querySelector('form');
    fireEvent.submit(form);
    expect(mockPush).toHaveBeenCalledWith('/search/pikachu');
  });
});