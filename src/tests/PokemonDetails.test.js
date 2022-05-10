import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';
import App from '../App';

describe('Teste o componente <PokemonDetails.js />', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  const { name, foundAt, summary } = pokemons[0];

  it('Testa se as informações detalhadas do pokémon selecionado são mostradas', () => {
    const infoDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(infoDetails);
    const textSummary = screen.getByRole('heading', {
      name: /summary/i,
      level: 2,
    });

    expect(screen.getByText(`${name} Details`)).toBeInTheDocument();
    expect(infoDetails).not.toBeInTheDocument();
    expect(textSummary).toBeInTheDocument();
    expect(screen.getByText(summary)).toBeInTheDocument();
  });

  it('Testa se existe na página os mapas contendo as localizações do pokémon', () => {
    const infoDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(infoDetails);
    const locationPokemon = screen.getByRole('heading', {
      name: `Game Locations of ${name}`,
      level: 2,
    });

    foundAt.forEach((item, i) => {
      const pokeMap = screen.getAllByRole('img', {
        name: `${name} location`,
      });
      expect(pokeMap[i]).toHaveAttribute('src', item.map);
      expect(pokeMap[i]).toHaveAttribute('alt', `${name} location`);
    });

    expect(locationPokemon).toBeInTheDocument();
  });

  it('Testa se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    const infoDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(infoDetails);
    const checkFavorite = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
    userEvent.click(checkFavorite);
  });
});
