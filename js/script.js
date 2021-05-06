let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === 'object') {
      pokemonList.push(pokemon);
    } else {
      console.log('error');
    }
  }

  function getAll() {
    return pokemonList;
  }

  //create pokemon table
  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.list-group');
    let listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('btn', 'btn-md', 'btn-block', 'btn-dark', 'text-capitalize');
    button.setAttribute('data-target', '#pokemonModal', 'data-toggle', 'modal');
    pokemonList.appendChild(listItem);
    listItem.appendChild(button);
    button.addEventListener('click', function () {
      showModal(pokemon);
    });
  }


  //load Pokemon list
  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  //load details
  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.weight = details.weight;
      pokemon.types = details.types;
      pokemon.types = [];
          details.types.forEach(function (pokemonType) {
          pokemon.types.push(' ' + pokemonType.type.name);
        });
      pokemon.abilities = details.abilities;
      pokemon.abilities = [];
          details.abilities.forEach(function(pokemonAbility) {
          pokemon.abilities.push(' ' + pokemonAbility.ability.name);
        });

    }).catch(function (e) {
      console.error(e);
    });
  }


  function showModal(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function () {
      let modalBody = $('.modal-body');
      let modalTitle = $('.modal-title');

      modalTitle.empty();
      modalBody.empty();

      let nameElement = $('<h1>' + pokemon.name + '</h1>');

      let imageElement = $('<img class="modal-img">');
      imageElement.attr('src', pokemon.imageUrl);

      let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');

      let weightElement = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');


      let typeElement = $('<p>' + 'Type: ' + pokemon.types + '</p>');

      let abilityElement = $('<p>' + 'Ability: ' + pokemon.abilities + '</p>');


      modalTitle.append(nameElement);
      modalBody.append(imageElement);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      modalBody.append(typeElement);
      modalBody.append(abilityElement);
      $('#pokemonModal').modal('toggle');

    });
  }

  $(document).ready(function(){
  $('#myInput').on('keyup', function() {
    var value = $(this).val().toLowerCase();
    $('li').filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
  }
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
