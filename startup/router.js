const express = require('express');
const amigoRoutes = require('../routes/amigoRoutes');
const jogoRoutes = require('../routes/jogoRoutes');

module.exports = (app) => {
    app.use(express.json());

    app.use('/amigo', amigoRoutes);
    app.use('/jogo', jogoRoutes);
};