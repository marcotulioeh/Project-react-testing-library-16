import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../components/NotFound';

describe('Teste o componente <NotFound.js />', () => {
  beforeEach(() => {
    renderWithRouter(<NotFound />);
  });

  it('Testa se a página contém um heading h2 com o texto Page Not Found', () => {
    const notFound = screen.getByRole('heading', {
      name: /page requested not found/i,
      level: 2,
    });

    expect(notFound).toBeInTheDocument();
  });

  it('Testa se a página mostra a imagem', () => {
    const url = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const img = screen.getByAltText(/pikachu/i);

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', url);
  });
});
