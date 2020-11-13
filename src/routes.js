// Controllers
import InfoController from './app/controllers/InfoController';
import DrainWatterController from './app/controllers/DrainWaterController';
import GeolocController from './app/controllers/GeolocController';
import FollowModeController from './app/controllers/FollowModeController';
import BluetoothConnectionController from './app/controllers/BluetoothConnectionController';
import DrainCommand from './app/controllers/DrainCommand';

const { Router } = require('express');

const routes = new Router();

// info
routes.get('/cooler-info', InfoController.handleCoolerInfo);

// drain watter
routes.get('/drain-watter', DrainWatterController.drainWatter);

// geoloc
routes.post('/geoloc', GeolocController.receiveGeoloc);

// drain water command
routes.post('/drain-water-command', DrainCommand.receiveCommand);

// follow mode
routes.post('/follow', FollowModeController.handleFollowMode);

// bluetooth connection
routes.post(
  '/bluetooth-connect',
  BluetoothConnectionController.connectBluetooth
);

module.exports = routes;
