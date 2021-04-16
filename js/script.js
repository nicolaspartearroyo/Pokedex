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

// Write Pokemons name + height + type.
// For some reason I have to put var i = number otherwise console tell me variable is undefined.
var i = 0;
for (let i = 0; i < pokemonList.lenght; i++); {
  document.write(pokemonList[i].name + '. Height: ' + pokemonList[i].height + '. Type: ' + pokemonList[i].type);
}

var i = 1;
for (let i = 0; i < pokemonList.lenght; i++); {
  document.write(pokemonList[i].name + '. Height: ' + pokemonList[i].height + '. Type: ' + pokemonList[i].type);
}

var i = 2;
for (let i = 0; i < pokemonList.lenght; i++); {
  document.write(pokemonList[i].name + '. Height: ' + pokemonList[i].height + '. Type: ' + pokemonList[i].type);
}

// Height condition
for (let i = 0; i < pokemonList.lenght; i++); {
  if (pokemonList[i].height > 1) {
    document.write('. Woow, thats big!');
  }
}
