import { render, screen } from '@testing-library/react';
import App from './App';
import { Reservations } from './components';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Checking Time Status Section', () => {
  render(<Reservations />);
  const statusHeading = screen.getByText("Evening");
  expect(statusHeading).toBeInTheDocument();
});