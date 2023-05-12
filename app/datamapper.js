const db = require('./database');

const dataMapper = {

  getAllPokemons: async () => {
    const query = {
      text: `SELECT * FROM "pokemon"`,
    };
    const results = await db.query(query);
    return results.rows;
  },

  getOnePokemon: async (id) => {
    const query = {
      text: `SELECT * FROM "pokemon" WHERE id = $1`,
      values: [id],
    };
    const result = await db.query(query);
    return result.rows;
  },





};



module.exports = dataMapper;