import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

function setup() {
  return render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}

describe('Header', () => {
  test('Nav links points to the correct page', () => {
    setup();
    const aboutLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutLink);

    expect(aboutLink).toBeInTheDocument();

    const logo = screen.getByRole('link', { name: / /i });
    userEvent.click(logo);

    expect(logo).toBeInTheDocument();

    const HowItWorks = screen.getByRole('link', { name: /how it works/i });
    userEvent.click(HowItWorks);

    expect(HowItWorks).toBeInTheDocument();

    // const search = screen.getByRole('link', { name: /searchpage/ });
    // userEvent.click(search);

    // expect(search).toBeInTheDocument();
  });
});
