import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App', () => {
  it('renders App component', () => {
    render(<App />);
    expect(screen.getByTestId('app')).toBeInTheDocument();
  });

  it('includes Header', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('includes Filters', () => {
    render(<App />);
    expect(screen.getByTestId('filters')).toBeInTheDocument();
  });

  it('includes Footer', () => {
    render(<App />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});