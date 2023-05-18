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
      selectType: null,
      filterValue: 'null',
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
    const filterValue = req.body.pokeType; // Récupérer le type sélectionné depuis le corps de la requête


    try {
      const pokemons = await dataMapper.getAllPokemons();
      const pokemonsFiltered = await dataMapper.filterPokemonsByType(filterValue); // Effectuer le filtrage dans le datamapper
      const types = await dataMapper.getTypes();
      let typeFiltered = null;

      types.filter((type) => {
        if (type.name === filterValue) {
          typeFiltered = {
            name: type.name,
            image: type.image,
          }
        }
      });

      if (filterValue === "null") {
        res.render('pokeList', {
          pokemons: pokemons,
          types: types,
          typeFiltered: typeFiltered,
          filterValue: filterValue,
        });
      }
      else {
        res.render('pokeList', {
          pokemons: pokemonsFiltered,
          types: types,
          typeFiltered: typeFiltered,
          filterValue: filterValue,
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