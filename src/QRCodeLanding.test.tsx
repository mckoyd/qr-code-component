import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './QRCodeLanding';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/QR Code Component/i);
  expect(linkElement).toBeInTheDocument();
});
