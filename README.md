# Boas vindas ao repositório do projeto de testes com a React Testing Library!

---

# Habilidades

Neste projeto, verificamos se você é capaz de:

* Utilizar os seletores (queries) da React-Testing-Library em testes automatizados.

* Simular eventos com a React-Testing-Library em testes automatizados.

* Testar fluxos lógicos assíncronos com a React-Testing-Library.

* Escrever testes que permitam a refatoração da estrutura dos componentes da aplicação sem necessidade de serem alterados.

* Criar mocks de APIs utilizando fetch.

* Testar inputs.

## O que deverá ser desenvolvido

Nesse projeto você escreverá testes para uma aplicação React.

---

# Requisitos do projeto

A seguir estão listados todos os requisitos do projeto. Lembre-se que para a avaliação utilizaremos testes por mutação, então cada requisito só será aceito se os testes tiverem comportamento adequado tanto na aplicação original como na modificada.

⚠ PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS, ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO! ⚠

Todos os arquivos de teste que vocês usarão **já estão previamente criados e novos arquivos não devem ser criados**. Como exemplo, colocamos um teste dentro do arquivo `src/tests/App.test.js`. Além disso, **cada requisito se refere a um arquivo da aplicação da Pokédex**. Obter aprovação num requisito significa que todos os casos de erro daquele arquivo estão cobertos, ou seja, todos os mutantes criados naquele arquivo pelo avaliador foram mortos. Nos subitens de cada requisito detalhamos o que é necessário fazer para obter a aprovação neles.

⚠ Assim como os arquivos de testes já estão criados na aplicação, a implementação também já está 100% funcional. Os únicos arquivos que precisam ser alterados são os arquivos de teste que estão dentro da pasta `src/tests`. Para que você não tenha problemas com o avaliador remoto, **não modifique os demais arquivos da pasta `src` e nem o `App.js`**.  ⚠

Observe que nem todos os testes são contemplados em sua totalidade pelo avaliador, mas é importante tentar realizar todos os testes de cada requisito a seguir, pois eles são relevantes para os cenários apresentados e vão colocar em prática os conhecimentos de RTL que você adquiriu até aqui! :)

## Lista de requisitos

### 1. Teste o componente `<App.js />`

  - Teste se o topo da aplicação contém um conjunto fixo de links de navegação.

    - O primeiro link deve possuir o texto `Home`.

    - O segundo link deve possuir o texto `About`.

    - O terceiro link deve possuir o texto `Favorite Pokémons`.

  - Teste se a aplicação é redirecionada para a página inicial, na URL `/` ao clicar no link `Home` da barra de navegação. 

  - Teste se a aplicação é redirecionada para a página de `About`, na URL `/about`, ao clicar no link `About` da barra de navegação. 

  - Teste se a aplicação é redirecionada para a página de `Pokémons Favoritados`, na URL `/favorites`, ao clicar no link `Favorite Pokémons` da barra de navegação.

  - Teste se a aplicação é redirecionada para a página `Not Found` ao entrar em uma URL desconhecida.

  **O que será verificado:**
  
  - Será avaliado se o arquivo teste `App.test.js` contempla 100% dos casos de uso criados pelo Stryker.

### 2. Teste o componente `<About.js />.`

  - Teste se a página contém as informações sobre a Pokédex.

  - Teste se a página contém um heading `h2` com o texto `About Pokédex`.

  - Teste se a página contém dois parágrafos com texto sobre a Pokédex.

  - Teste se a página contém a seguinte imagem de uma Pokédex: `https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`.

  **O que será verificado:**
    
  - Será avaliado se o arquivo teste `About.test.js` contempla 100% dos casos de uso criados pelo Stryker.

### 3. Teste o componente `<FavoritePokemons.js />`

  - Teste se é exibida na tela a mensagem `No favorite pokemon found`, caso a pessoa não tenha pokémons favoritos.

  - Teste se são exibidos todos os cards de pokémons favoritados.

  **O que será verificado:**

  - Será avaliado se o arquivo teste `FavoritePokemons.test.js` contempla 100% dos casos de uso criados pelo Stryker.

### 4. Teste o componente `<NotFound.js />`

  - Teste se a página contém um heading `h2` com o texto `Page requested not found 😭`;

  - Teste se a página mostra a imagem `https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif`.

  **O que será verificado:**

  - Será avaliado se o arquivo teste `NotFound.test.js` contempla 100% dos casos de uso criados pelo Stryker.

### 5. Teste o componente `<Pokedex.js />`

  - Teste se a página contém um heading `h2` com o texto `Encountered pokémons`.

  - Teste se é exibido o próximo pokémon da lista quando o botão `Próximo pokémon` é clicado.

    - O botão deve conter o texto `Próximo pokémon`;

    - Os próximos pokémons da lista devem ser mostrados, um a um, ao clicar sucessivamente no botão;

    - O primeiro pokémon da lista deve ser mostrado ao clicar no botão, se estiver no último pokémon da lista;

  - Teste se é mostrado apenas um pokémon por vez.

  - Teste se a Pokédex tem os botões de filtro.

    - Deve existir um botão de filtragem para cada tipo de pokémon, sem repetição.

    - A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos pokémons daquele tipo;

    - O texto do botão deve corresponder ao `nome do tipo`, ex. `Psychic`;

    - O botão `All` precisa estar **sempre** visível.

  - Teste se a Pokédex contém um botão para resetar o filtro

    - O texto do botão deve ser `All`;

    - A Pokedéx deverá mostrar os pokémons normalmente (sem filtros) quando o botão `All` for clicado;

    - Ao carregar a página, o filtro selecionado deverá ser `All`;

  **O que será verificado:**

  - Será avaliado se o arquivo teste `Pokedex.test.js` contempla 100% dos casos de uso criados pelo Stryker.

### 6. Teste o componente `<Pokemon.js />`

  - Teste se é renderizado um card com as informações de determinado pokémon.

    - O nome correto do pokémon deve ser mostrado na tela;

    - O tipo correto do pokémon deve ser mostrado na tela.

    - O peso médio do pokémon deve ser exibido com um texto no formato `Average weight: <value> <measurementUnit>`; onde `<value>` e `<measurementUnit>` são, respectivamente, o peso médio do pokémon e sua unidade de medida.

    - A imagem do pokémon deve ser exibida. Ela deve conter um atributo `src` com a URL da imagem e um atributo `alt` com o texto `<name> sprite`, onde `<name>` é o nome do pokémon;

  - Teste se o card do pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste pokémon. O link deve possuir a URL `/pokemons/<id>`, onde `<id>` é o id do pokémon exibido;

  - Teste se ao clicar no link de navegação do pokémon, é feito o redirecionamento da aplicação para a página de detalhes de pokémon. 
  
  - Teste também se a URL exibida no navegador muda para `/pokemon/<id>`, onde `<id>` é o id do pokémon cujos detalhes se deseja ver;

  - Teste se existe um ícone de estrela nos pokémons favoritados.

    - O ícone deve ser uma imagem com o atributo `src` contendo o caminho `/star-icon.svg`;

    - A imagem deve ter o atributo `alt` igual a `<pokemon> is marked as favorite`, onde `<pokemon>` é o nome do pokémon exibido.

    **O que será verificado:**

    - Será avaliado se o arquivo teste `Pokemon.test.js` contempla 100% dos casos de uso criados pelo Stryker.

### 7. Teste o componente `<PokemonDetails.js />`

  - Teste se as informações detalhadas do pokémon selecionado são mostradas na tela.

    - A página deve conter um texto `<name> Details`, onde `<name>` é o nome do pokémon;

    - **Não** deve existir o link de navegação para os detalhes do pokémon selecionado.

    - A seção de detalhes deve conter um heading `h2` com o texto `Summary`.

    - A seção de detalhes deve conter um parágrafo com o resumo do pokémon específico sendo visualizado.

  - Teste se existe na página uma seção com os mapas contendo as localizações do pokémon

    - Na seção de detalhes deverá existir um heading `h2` com o texto `Game Locations of <name>`; onde `<name>` é o nome do pokémon exibido.

    - Todas as localizações do pokémon devem ser mostradas na seção de detalhes;

    - Devem ser exibidos o nome da localização e uma imagem do mapa em cada localização;

    - A imagem da localização deve ter um atributo `src` com a URL da localização;

    - A imagem da localização deve ter um atributo `alt` com o texto `<name> location`, onde `<name>` é o nome do pokémon;

  - Teste se o usuário pode favoritar um pokémon através da página de detalhes.

    - A página deve exibir um `checkbox` que permite favoritar o pokémon;

    - Cliques alternados no `checkbox` devem adicionar e remover respectivamente o pokémon da lista de favoritos;

    - O `label` do `checkbox` deve conter o texto `Pokémon favoritado?`;

    **O que será verificado:**

    - Será avaliado se o arquivo teste `PokemonDetails.test.js` contempla 100% dos casos de uso criados pelo Stryker.

## Quer fazer mais? Temos algumas sugestões!

O que temos a seguir não são requisitos bônus - são ideias para você se aprofundar mais no projeto e **aprender mais!** Que tal trabalhar neles? Começamos com algo bem direto:

  - A cobertura de testes deve ser 100%

    - Para ver a cobertura de testes, execute no terminal o comando `npm run test-coverage`.

Além disso, a Pokédex é uma aplicação estática, com seus dados pré-definidos. Utilizando a [PokéAPI](https://pokeapi.co/), é possível deixá-la mais dinâmica e realista.

Se quiser implemente os requisitos propostos a seguir e escreva testes para eles. Tente manter sempre a cobertura de testes em 100%, garantindo assim que não há código ou fluxos lógicos não testados. Para um desafio adicional, tente utilizar TDD - escreva os testes à medida que for implementando os requisitos.

  - Adicione uma rota para exibir uma lista de localizações

    - A URL da rota deve ser `/locations`;

    - A página deve exibir uma lista com as localizações retornadas pela PokéAPI. Você pode ler [aqui](https://pokeapi.co/docs/v2#resource-lists-section) e [aqui](https://pokeapi.co/docs/v2#locations-section) como utilizar a PokéAPI para buscar uma lista de localizações.

  - Adicione na barra de navegação um link para a lista de localizações

    - O link deve conter o texto `Locations`;

    - Ao clicar no link, a página com a lista de localizações deve ser exibida;

  - Adicione botões de paginação na lista de localizações.

  Por padrão, os _endpoints_ da PokéAPI retornam no máximo 20 resultados. Utilizando os parâmetros `limit` e `offset`, você pode especificar qual página deseja buscar e qual seu tamanho. Veja [aqui](https://pokeapi.co/docs/v2#resource-lists-section) como utilizar estes parâmetros.

    - Adicione dois botões "Anterior" e "Próxima" que permitam navegar entre as página da lista de localizações;

    - Na primeira página, o botão "Anterior" deve ser desabilitado. Da mesma forma, ao alcançar a última página, o botão "Próximo" deve ser desabilitado;

  - Adiciona uma rota para exibir uma lista de gerações.

    - A URL da rota deve ser `/generations`;

    - A página deve exibir uma lista com as gerações retornadas pela PokéAPI. Você pode ler [aqui](https://pokeapi.co/docs/v2#resource-lists-section) e [aqui](https://pokeapi.co/docs/v2#generations) como utilizar a PokéAPI para buscar uma lista de gerações.

  - Adicione na barra de navegação um link para a lista de gerações

    - O link deve conter o texto `Generations`;

    - Ao clicar no link, a página com a lista de gerações deve ser exibida.

  - Adicione uma rota para exibir informações sobre uma geração

    - A URL da rota deve ser `/generations/<id>`, onde `<id>` é o id da geração exibida;

    - A página deve exibir, após buscar na PokéAPI, o nome da geração e uma lista com os nomes dos pokémons introduzidos nesta geração.

  - Adicione a cada geração na lista de gerações um link para a página de detalhes desta geração

    - Ao clicar no link, a página com informações sobre a geração clicada deve ser exibida.

---
