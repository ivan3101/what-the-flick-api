const Express = require('express');
const Router = Express.Router();
const ArticleRoutes = require('./article');
const AuthRoutes = require('./auth');
const UserRoutes = require('./user');

Router
    .use('/auth', AuthRoutes)
    .use('/users', UserRoutes)
    .use('/articles', ArticleRoutes);

module.exports = Router;