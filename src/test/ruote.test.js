import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Page } from '../Components/Page';

test('navigates to the correct page when the button is clicked', () => {
  // Render the component inside a MemoryRouter
  render(
    <MemoryRouter initialEntries={['/']}>
      <Page />
    </MemoryRouter>
  );
  // Find the button and simulate a click
  const button = screen.getByText('Go to Login');
  button.click();
  // Assert that the URL has changed to /Login
  expect(window.location.pathname).toBe('/Login');
});
