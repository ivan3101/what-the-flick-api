const Express = require('express');
const Router = Express.Router();
const ArticleRoutes = require('./article');
const AuthRoutes = require('./auth');
const UserRoutes = require('./user');
const MovieRoutes = require('./movie');
const SerieRoutes = require('./serie');


Router
    .use('/auth', AuthRoutes)
    .use('/users', UserRoutes)
    .use('/articles', ArticleRoutes)
    .use('/movies', MovieRoutes)
    .use('/series', SerieRoutes);

module.exports = Router;