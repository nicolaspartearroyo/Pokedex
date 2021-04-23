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
    height:0.6,
    type:'Fire'
  },

  {
    name:'Squirtle',
    height:0.5,
    type:'Water'
  }
];

function add(pokemon) {
   if (
     typeof pokemon === "object" &&
     "name" in pokemon &&
     "height" in pokemon &&
     "types" in pokemon
   ) {
     pokemonList.push(pokemon);
   } else {
     console.log("pokemon is not correct");
   }
 }

function getAll() {
  return pokemonList;
}

function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  let listItem = document.createElement('li');
  let button = document.createElement('button');

  button.innerText = pokemon.name;
  button.classList.add('buttonList');

  listItem.appendChild(button);
  pokemonList.appendChild(listItem);

  button.addEventListener('click', function() {
    showDetails(pokemon);
  });

  function showDetails(pokemon) {
    console.log(pokemon);
  };

  };


return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,

};

  })();
pokemonRepository.getAll().forEach(function(pokemon) {
pokemonRepository.addListItem(pokemon);

});
