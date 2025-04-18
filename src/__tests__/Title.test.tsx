import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Title from '@/app/components/ui/Title';

describe('Title', () => { 
  it('renders a title with the correct text', () => {
    render(<Title>This is a test title</Title>);
    expect(screen.getByText(/this is a test title/i)).toBeInTheDocument();
  });

  it('renders a title with the correct class name', () => {
    render(<Title className="custom-class">Test Title</Title>);
    const title = screen.getByText(/test title/i).closest('h2');
    expect(title).toHaveClass('custom-class');
  });
});