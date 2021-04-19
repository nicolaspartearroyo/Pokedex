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

function printArrayList(list) {
  for (let i = 0; i < pokemonList.length; i++) {
    document.write("<p>" + pokemonList[i].name + '. Height: ' + pokemonList[i].height + '. Type: ' + pokemonList[i].type + "</p>")
    if (pokemonList[i].height > 1) {
    document.write('. Woow, thats big!');
    }
  }
}

printArrayList(pokemonList);
