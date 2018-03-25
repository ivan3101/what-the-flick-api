const Express = require('express');
const Router = Express.Router();
const ArticleRoutes = require('./article');
const AuthRoutes = require('./auth');
const UserRoutes = require('./user');
const MovieRoutes = require('./movie');

Router
    .use('/auth', AuthRoutes)
    .use('/users', UserRoutes)
    .use('/articles', ArticleRoutes)
    .use('/movies', MovieRoutes);

module.exports = Router;