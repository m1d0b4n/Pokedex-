const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');


router.get('/', mainController.home);
router.get('/pokelist', mainController.pokeList);
router.get('/pokecard/:id', mainController.pokecard);
router.get('/search', mainController.searchPage);
router.post('/pokelist/filter', mainController.filterPokeList);
router.use(mainController.notFound);



module.exports = router;