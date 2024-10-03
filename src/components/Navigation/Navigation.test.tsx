import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import '@testing-library/jest-dom/extend-expect'; 
import Navigation from './Navigation';

describe('Navigation Component', () => {
  test('renders the navigation links', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Filmes')).toBeInTheDocument();
    expect(getByText('React multiple')).toBeInTheDocument();
  });

  test('the links have the correct href attributes', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );

    expect(getByText('Home')).toHaveAttribute('href', '/');
    expect(getByText('Filmes')).toHaveAttribute('href', '/movies');
    expect(getByText('React multiple')).toHaveAttribute('href', '/react-multiple');
  });
});
