import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  const namePokemon = 'pokemon-name';

  it('Testa se a página contém um heading h2 com o texto Encountered pokémons', () => {
    const findPokemons = screen.getByRole('heading', {
      level: 2,
      name: /Encountered pokémons/i,
    });
    expect(findPokemons).toBeInTheDocument();
  });

  it('Testa se é exibido o próximo pokémon da lista clicando no botão', () => {
    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    const id = screen.getByTestId(namePokemon);
    const last = pokemons[pokemons.length - 1].name;
    const first = pokemons[0].name;

    pokemons.map(({ name }, index) => {
      expect(id).toHaveTextContent(name);
      userEvent.click(nextPokemon);
      return expect(id).not.toHaveTextContent(pokemons[index].name);
    });

    pokemons.forEach((pokemon, index) => {
      if (index < pokemons.length - 1) userEvent.click(nextPokemon);
    });

    expect(nextPokemon).toBeInTheDocument();
    expect(id).toBeInTheDocument();
    expect(id).toHaveTextContent(last);
    userEvent.click(nextPokemon);
    expect(id).toHaveTextContent(first);
  });

  it('Testa se é mostrado apenas um pokémon por vez', () => {
    const onePokemonAtATime = screen.getAllByTestId(namePokemon);
    expect(onePokemonAtATime).toHaveLength(1);
  });

  it('Testa se a Pokédex tem os botões de filtro', () => {
    const button = screen.getAllByTestId('pokemon-type-button');
    const arrTypes = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    const allPokemons = screen.getByRole('button', { name: /all/i });

    button.map((click, index) => {
      expect(click).toBeInTheDocument();
      return expect(button[index]).toHaveTextContent(arrTypes[index]);
    });

    expect(button.length).toBe(arrTypes.length);
    expect(allPokemons).toBeInTheDocument();
  });

  it('Testa se a Pokédex contém um botão para resetar o filtro', () => {
    const testNamePokemon = screen.getByTestId(namePokemon);
    const allPokemons = screen.getByRole('button', { name: /all/i });
    const nextPokemon = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(allPokemons);

    expect(allPokemons).toBeInTheDocument();

    pokemons.forEach((pokemon, index) => {
      expect(testNamePokemon).toHaveTextContent(pokemons[index].name);
      userEvent.click(nextPokemon);
      expect(allPokemons).toBeInTheDocument();
    });
  });
});
