const dataMapper = require("../datamapper");

const mainController = {

  home: (req, res) => {
    res.render('homePage');
  },

  pokeList: async (req, res) => {
    const pokemons = await dataMapper.getAllPokemons();
    const types = await dataMapper.getTypes();
    res.render('pokeList', {
      pokemons: pokemons,
      types: types,
    });
  },

  pokecard: async (req, res) => {
    const parameter = req.params.id;
    const pokemon = await dataMapper.getOnePokemon(parameter);
    res.render('pokeCard', {
      pokemon: pokemon,
    });
  },

  searchPage: (req, res) => {
    res.render('search');
  },

  filterPokeList: async (req, res) => {
    const selectType = req.body.pokeType; // Récupérer le type sélectionné depuis le corps de la requête


    try {
      const pokemons = await dataMapper.getAllPokemons();
      const pokemonsFiltered = await dataMapper.filterPokemonsByType(selectType); // Effectuer le filtrage dans le datamapper
      const types = await dataMapper.getTypes();

      if (selectType === "null") {
        console.log('je suis ici');
        res.render('pokeList', {
          pokemons: pokemons,
          types: types,
          selectType: selectType,
        });
      }
      else {
        res.render('pokeList', {
          pokemons: pokemonsFiltered,
          types: types,
          selectType: selectType,
        });
      }


    } catch (error) {
      console.error('Erreur lors du filtrage de la liste des Pokémon :', error);
      res.status(500).render('error', { error: 500, message: 'Erreur lors du filtrage de la liste des Pokémon' });
    }
  },

  notFound: (request, response) => {
    response.status(404).render('error', { error: 404, message: 'Page introuvable' });
  },



};


module.exports = mainController;