import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from '@/app/components/ui/Card';
import Title from '@/app/components/ui/Title';

describe('Card', () => {
  it('renders a card with the correct content', () => {
    render(<Card><Title>This is a test card.</Title></Card>);
    expect(screen.getByText(/this is a test card/i)).toBeInTheDocument();
  });

  it('renders a card with the correct class name', () => {
    render(<Card className="custom-class">Test</Card>);
    const card = screen.getByText(/test/i).closest('article');
    expect(card).toHaveClass('w-full card text-left custom-class');
  });
});