const Express = require('express');
const Router = Express.Router();
const ArticleRoutes = require('./article');
const AuthRoutes = require('./auth');

Router
    .use('/auth', AuthRoutes)
    .use('/articles', ArticleRoutes);

module.exports = Router;