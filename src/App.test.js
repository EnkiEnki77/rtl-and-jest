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

test('button enabled, and checkbox unchecked initially', () => {
  render(<App />);

  // Check that button starts enabled
  const button = screen.getByRole('button', {name: /Changes to blue/i})
  expect(button).toBeEnabled()

  // Check that checkbox starts unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('button disabled, when checkbox is checked', () => {
  render(<App />);

  // Click checkbox, and check that it is checked
  const checkbox = screen.getByRole('checkbox')
  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked()

  // Check that button is disabled after checkbox is checked
  const button = screen.getByRole('button', {name: /Changes to blue/i})
  expect(button).toBeDisabled()

  // Check that button is enabled when checkbox is unchecked
  fireEvent.click(checkbox)
  expect(checkbox).not.toBeChecked()
  expect(button).toBeEnabled()
})

