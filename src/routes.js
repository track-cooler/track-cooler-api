// Controllers
import InfoController from './app/controllers/InfoController';
import DrainWatterController from './app/controllers/DrainWaterController';
import GeolocController from './app/controllers/GeolocController';
import FollowModeController from './app/controllers/FollowModeController';

const { Router } = require('express');

const routes = new Router();

// info
routes.get('/cooler-info', InfoController.handleCoolerInfo);

// drain watter
routes.get('/drain-watter', DrainWatterController.drainWatter);

// geoloc
routes.post('/geoloc', GeolocController.receiveGeoloc);

// follow mode
routes.post('/follow', FollowModeController.handleFollowMode);

module.exports = routes;
