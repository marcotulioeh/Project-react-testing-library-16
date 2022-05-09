import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente <App.js />', () => {
  it('Testa se a aplicação é redirecionada para a página home', () => {
    renderWithRouter(<App />);
    const home = screen.getByRole('link', { name: /home/i });
    userEvent.click(home);
  });

  it('Testa se a aplicação é redirecionada para a página de About', () => {
    renderWithRouter(<App />);
    const about = screen.getByRole('link', { name: /about/i });
    userEvent.click(about);
  });

  it('Testa se a aplicação é redirecionada para a página de Pokémons Favoritados', () => {
    renderWithRouter(<App />);
    const favorite = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(favorite);
  });

  it('Testa se a aplicação é redirecionada para a página Not Found', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/rota-não-existe');
  });
});
