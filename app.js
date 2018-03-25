require('./api/config/db_connection');

const Morgan = require('morgan');
const BodyParser = require('body-parser');
const Cors = require('cors');
const Helmet = require('helmet');
const Express = require('express');
const App = Express();
const PORT = process.env.PORT || 3000;

App.use(Helmet());
App.use(Cors());
if (App.get('ENV') === 'development') App.use(Morgan('dev'));
else App.use(Morgan('short'));
App.use(BodyParser.urlencoded({extended: false}));
App.use(BodyParser.json());

App.listen(() => console.log(`API is running in port: ${PORT}`));