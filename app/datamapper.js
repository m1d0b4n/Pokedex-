const db = require('./database');

const dataMapper = {

  getAllPokemons: async function () {
    const query = {
      text: `SELECT * FROM "pokemon"`,
    };
    const results = await db.query(query);
    return results.rows;
  },


};



module.exports = dataMapper;