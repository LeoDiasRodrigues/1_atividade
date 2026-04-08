const express = require('express');
const router = express.Router();
const JogoController = require('../controllers/jogoController');

router
    .get('/jogos', JogoController.getAll)
    .post('/jogos', JogoController.create)
    .get('/jogos/:id', JogoController.getById)
    .put('/jogos/:id', JogoController.update)
    .delete('/jogos/:id', JogoController.delete);

module.exports = router;