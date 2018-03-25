const Express = require('express');
const Router = Express.Router();
const MovieControllers = require('../../controllers/movie.controller');
const HandleAsyncExceptions = require('../../handlers/handleAsyncExceptions');

Router
    .route('/')
    .get(HandleAsyncExceptions(MovieControllers.getAllMovies))
    .post(HandleAsyncExceptions(MovieControllers.addMovie));

Router
    .route('/category/:category')
    .get(HandleAsyncExceptions(MovieControllers.getMoviesByCategory));

Router
    .route('/:id')
    .get(HandleAsyncExceptions(MovieControllers.getMovieById));

module.exports = Router;