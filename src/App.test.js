import { fireEvent, logRoles, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('button has correct color initially', () => {
  render(<App />);

  const button = screen.getByRole('button', {name: /Changes to blue/i})

  expect(button).toHaveStyle({backgroundColor: 'red'})
});

test('button turns blue when clicked', () => {
  render(<App />);
  
  const button = screen.getByRole('button', {name: /Changes to blue/i})
  fireEvent.click(button)

  expect(button).toHaveStyle({backgroundColor: 'blue'})
});

test('button turns back to red when clicked after turning blue', () => {
  const {container} = render(<App />);

  logRoles(container)
  
  const button = screen.getByRole('button', {name: /Changes to blue/i})
  fireEvent.click(button)

  expect(button).toHaveStyle({backgroundColor: 'blue'})
  expect(button).toHaveTextContent(/Changes to red/i)

  fireEvent.click(button)

  expect(button).toHaveStyle({backgroundColor: 'red'})
  expect(button).toHaveTextContent(/Changes to blue/i)
});

