const db = require('./database');

const dataMapper = {

  getAllPokemons: async () => {
    return fetch('https://pokebuildapi.fr/api/v1/pokemon')
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Erreur de réseau : ' + response.status);
        }
        return response.json();
      });
  },

  getOnePokemon: async (id) => {
    return fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Erreur de réseau : ' + response.status);
        }
        return response.json();
      });
  },

  getTypes: async () => {
    return fetch(`https://pokebuildapi.fr/api/v1/types`)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Erreur de réseau : ' + response.status);
        }
        return response.json();
      });
  },

  filterPokemonsByType: async (selectType) => {
    return fetch(`https://pokebuildapi.fr/api/v1/pokemon/type/${selectType}`)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Erreur de réseau : ' + response.status);
        }
        return response.json();
      });
  },


};



module.exports = dataMapper;