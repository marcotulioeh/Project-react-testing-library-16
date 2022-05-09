import React from 'react';
import { screen } from '@testing-library/react';
import About from '../components/About';
import renderWithRouter from '../renderWithRouter';

describe('Testa o componente <About.js />', () => {
  beforeEach(() => {
    renderWithRouter(<About />);
  });
  it('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    const textH2 = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });
    expect(textH2).toBeInTheDocument();
  });

  it('Testa se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    const onPokemon = screen.getAllByText(/Pokémons/);
    expect(onPokemon).toHaveLength(2);
  });

  it('Testa se a página contém a seguinte imagem de uma Pokédex', () => {
    const imgPokedex = screen.getByRole('img');
    const url = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(imgPokedex).toBeInTheDocument();
    expect(imgPokedex).toHaveAttribute('src', url);
    expect(imgPokedex).toHaveAttribute('alt', 'Pokédex');
  });
});
