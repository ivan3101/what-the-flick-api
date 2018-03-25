require('./api/config/db_connection');

const Morgan = require('morgan');
const BodyParser = require('body-parser');
const Cors = require('cors');
const Helmet = require('helmet');
const Express = require('express');
const App = Express();
const PORT = process.env.PORT || 3000;
const Routes = require('./api/routes');
const AuthenticationError = require('./api/handlers/authenticationHandler').authMiddleware;
const ValidationError = require('./api/handlers/validationError');
const ErrorHandler = require('./api/handlers/handleErrors');

App.use(Helmet());
App.use(Cors());
if (App.get('ENV') === 'development') App.use(Morgan('dev'));
else App.use(Morgan('short'));
App.use(BodyParser.urlencoded({extended: false}));
App.use(BodyParser.json());

App.use('/api', Routes);

App.use(AuthenticationError);
App.use(ValidationError);
App.use(ErrorHandler);

App.listen(PORT, () => console.log(`API is running in port: ${PORT}`));