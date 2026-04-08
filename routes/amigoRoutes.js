const express = require('express');
const router = express.Router();
const AmigoController = require('../controllers/amigoController');

router
    .get('/amigos', AmigoController.getAll)
    .post('/amigos', AmigoController.create)
    .get('/amigos/:id', AmigoController.getById);

module.exports = router;