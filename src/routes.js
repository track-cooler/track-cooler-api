const { Router } = require('express');

// Controllers
import InfoController from './app/controllers/InfoController';

const routes = new Router();

routes.get('/cooler-info', InfoController.getCoolerInfo);

module.exports = routes;
