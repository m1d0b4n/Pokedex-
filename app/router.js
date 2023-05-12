const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController');


router.get('/', mainController.home);
router.get('/pokelist', mainController.pokeList);
router.get('/pokecard/:id', mainController.pokecard);
// router.use(mainController.notFound);



module.exports = router;