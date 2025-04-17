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

  it('does not call router.push on submit with empty input', () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    render(<SearchBar />);
    const form = screen.getByRole('form') || document.querySelector('form');
    fireEvent.submit(form);
    expect(mockPush).not.toHaveBeenCalled();
  });

  it('renders with custom class names', () => {
    render(<SearchBar classNameContainer="custom-container" classNameText="custom-text" classNameIcon="custom-icon" />);
    const container = screen.getByRole('form');
    const input = screen.getByPlaceholderText(/search/i);
    const button = screen.getByRole('button');
    
    expect(container).toHaveClass('input-container py-2 flex items-center gap-2 justify-between custom-container');
    expect(input).toHaveClass('input-text flex grow w-full focus:outline-none custom-text');
    expect(button).toHaveClass('flex items-center');
    expect(screen.getByAltText(/search/i)).toHaveClass('mr-2 opacity-60 custom-icon');
  });

  it('renders with custom placeholder', () => {
    render(<SearchBar placeholder="Custom Placeholder" />);
    expect(screen.getByPlaceholderText(/custom placeholder/i)).toBeInTheDocument();
  });

  it('renders with custom icon size', () => {
    render(<SearchBar classNameIcon="w-8 h-8" />);
    expect(screen.getByAltText(/search/i)).toHaveClass('mr-2 opacity-60 w-8 h-8');
  });
});