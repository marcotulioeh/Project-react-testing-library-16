import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import FavoritePokemons from '../components/FavoritePokemons';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <FavoritePokemons.js />', () => {
  it('Testa se é exibida na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);
    const pokemonFound = screen.getByText('No favorite pokemon found');
    expect(pokemonFound).toBeInTheDocument();
  });

  it('Testa se são exibidos todos os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);

    fireEvent.click(screen.getByText('Dragon'));
    fireEvent.click(screen.getByText('More details'));
    fireEvent.click(screen.getByText('Pokémon favoritado?'));
    fireEvent.click(screen.getByText('Home'));
    fireEvent.click(screen.getByText('Normal'));
    fireEvent.click(screen.getByText('More details'));
    fireEvent.click(screen.getByText('Pokémon favoritado?'));
    fireEvent.click(screen.getByText('Favorite Pokémons'));

    const average = screen.getAllByText(/average weight/i);
    expect(average).toHaveLength(2);
  });
});
