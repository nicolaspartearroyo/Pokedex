let pokemonList =
[
  {
    name:'Bulbasur',
    height:0.7,
    type:'Grass'
  },

  {
    name:'Charmander',
    height:1.6,
    type:'Fire'
  },

  {
    name:'Squirtle',
    height:0.5,
    type:'Water'
  }
];

for (let i = 0; i < pokemonList.lenght; i++); {
  document.write(pokemonList[i].name + '. Height: ' + pokemonList[i].height + '. Type: ' + pokemonList[i].type);
}

for (let i = 0; i < pokemonList.lenght; i++); {
  if (pokemonList[i].height > 1) {
    document.write('. Woow, thats big!');
  }
}
