/** @format */

const path = require('path'),
	express = require('express'),
	mongoose = require('mongoose'),
	morgan = require('morgan'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	xss = require('xss-clean'),
	dotenv = require('dotenv'),
	mongoSanitize = require('express-mongo-sanitize'),
	userRouter = require('../routes/userRouter'),
	globalErrorHandler = require('../controllers/errorController');
module.exports.init = () => {
	mongoose
		.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => console.log('DB connection successful!'))
		.catch((err) => SVGForeignObjectElement.log('ERROR'));
	mongoose.set('useCreateIndex', true);
	mongoose.set('useFindAndModify', false);

	const app = express();

	// enable request logging for development debugging
	app.use(morgan('dev'));

	// body parsing middleware
	app.use(bodyParser.json());
	app.use(cookieParser());

	// Data sanitization against NoSQL query injection
	app.use(mongoSanitize());

	// Data sanitization against XSS
	app.use(xss());

	// add a router
	app.use('/user', userRouter);

	app.use(globalErrorHandler);

	if (process.env.NODE_ENV === 'production') {
		// Serve any static files
		app.use(express.static(path.join(__dirname, '../../client/build')));

		// Handle React routing, return all requests to React app
		app.get('*', function (req, res) {
			res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
		});
	}

	return app;
};
