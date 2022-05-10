import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Teste o componente <Pokemon.js />', () => {
  const {
    id,
    name,
    type,
    averageWeight: { value, measurementUnit },
    image,
  } = pokemons[0];

  it('Testa se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);

    const pokeName = screen.getByTestId('pokemon-name');
    const pokeType = screen.getByTestId('pokemon-type');
    const pokeWeight = screen.getByTestId('pokemon-weight');
    const averageWeight = `Average weight: ${value} ${measurementUnit}`;
    const pokeNameSprite = screen.getByAltText(`${name} sprite`);

    expect(pokeName).toHaveTextContent(name);
    expect(pokeType).toHaveTextContent(type);
    expect(pokeWeight).toHaveTextContent(averageWeight);
    expect(pokeNameSprite).toHaveAttribute('src', image);
  });

  it('Testa se o card indicado na Pokédex contém um link para exibir detalhes', () => {
    const { history } = renderWithRouter(<App />);
    const pokedexDetails = screen.getByRole('link', { name: /more details/i });

    expect(pokedexDetails).toBeDefined();
    userEvent.click(pokedexDetails);
    expect(history.location.pathname).toBe(`/pokemons/${id}`);
  });

  it('Teste se existe um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);
    const pokedexDetails = screen.getByRole('link', { name: /More details/i });
    userEvent.click(pokedexDetails);
    const favBox = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
    userEvent.click(favBox);
    const markedFavorite = screen.getByRole('img', {
      name: `${name} is marked as favorite`,
    });
    const img = '/star-icon.svg';

    expect(markedFavorite).toHaveAttribute('src', img);
  });
});
