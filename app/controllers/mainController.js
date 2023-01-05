const dataMapper = require("../datamapper");

const mainController = {

  home: function (req, res){
    res.render('homePage');
  },

  pokeList: async function (req, res){
    try {
      const pokemons = await dataMapper.getAllPokemons();
      res.render('pokeList', {
        pokemons: pokemons,
      });

    }catch(error) {
      console.error(error);
      response.status(500).render('error');
    }
    
  },



};


module.exports = mainController;