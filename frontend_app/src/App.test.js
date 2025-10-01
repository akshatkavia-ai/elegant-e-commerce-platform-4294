import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Electric Orange storefront heading', () => {
  render(<App />);
  const heading = screen.getByText(/Electric Orange/i);
  expect(heading).toBeInTheDocument();
});
