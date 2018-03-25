const Express = require('express');
const Router = Express.Router();
const SerieControllers = require('../../controllers/serie.controller');
const HandleAsyncExceptions = require('../../handlers/handleAsyncExceptions');

Router
    .route('/')
    .get(HandleAsyncExceptions(SerieControllers.getAllSeries))
    .post(HandleAsyncExceptions(SerieControllers.addSerie));

Router
    .route('/category/:category')
    .get(HandleAsyncExceptions(SerieControllers.getSeriesByCategory));

Router
    .route('/:id')
    .get(HandleAsyncExceptions(SerieControllers.getSerieById));

module.exports = Router;