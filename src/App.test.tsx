import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './composents/App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
