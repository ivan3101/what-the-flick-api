const Express = require('express');
const Router = Express.Router();
const ArticleControllers = require('../../controllers/article.controller');
const Authentication = require('../../handlers/authenticationHandler');
const HandleAsyncExceptions = require('../../handlers/handleAsyncExceptions');

Router
    .route('/')
    .get(HandleAsyncExceptions(ArticleControllers.getAllArticles))
    .post(HandleAsyncExceptions(ArticleControllers.addArticle));

Router
    .route('/category/:category')
    .get(HandleAsyncExceptions(ArticleControllers.getArticlesByCategory));

Router
    .route('/:id')
    .get(HandleAsyncExceptions(ArticleControllers.getArticleById))
    .put(Authentication.authentication, HandleAsyncExceptions(ArticleControllers.addComment));

module.exports = Router;