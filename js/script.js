let pokemonRepository = (function(){
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

pokemonList.forEach(function(pokemon)
{ document.write("<p>" + pokemon.name + '. Height: ' + pokemon.height + '. Type: ' + pokemon.type + "</p>")
  if (pokemon.height > 1) {
  document.write('. Woow, thats big!');
    }
  })

  return {
    add: function(pokemon) {
    pokemonList.push(pokemon);
  },

    getAll: function() {
      return pokemonList;
    }
  };

})();

pokemonRepository.add({item:''});
