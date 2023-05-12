const dataMapper = require("../datamapper");

const mainController = {

  home: (req, res) => {
    res.render('homePage');
  },

  pokeList: async (req, res) => {
    const pokemons = await dataMapper.getAllPokemons();
    res.render('pokeList', {
      pokemons: pokemons,
    });
  },

  pokecard: async (req, res) => {
    const parameter = req.params.id;
    const pokemon = await dataMapper.getOnePokemon(parameter);
    res.render('pokeCard', {
      pokemon: pokemon,
    });
  },

  notFound: (request, response) => {
    response.status(404).render('error', { error: 404, message: 'Page introuvable' });
  },




};


module.exports = mainController;