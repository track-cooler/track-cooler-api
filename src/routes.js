import InfoController from './app/controllers/InfoController';

const { Router } = require('express');

// Controllers

const routes = new Router();

routes.get('/cooler-info', InfoController.handleCoolerInfo);

module.exports = routes;
