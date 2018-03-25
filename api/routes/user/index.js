const Express = require('express');
const Router = Express.Router();
const HandleAsyncExceptions = require('../../handlers/handleAsyncExceptions');
const UserController = require('../../controllers/user.controller');

Router
    .route('/')
    .post(HandleAsyncExceptions(UserController.addUser));

module.exports = Router;