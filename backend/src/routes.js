const express = require('express');
const routes = express.Router();
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

routes.post('/session', SessionController.store);
routes.post('/spots', SpotController.store);

module.exports = routes;