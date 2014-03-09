// server.js

// set up ======================================================================
// get all the tools we need

var yaml_config = require('node-yaml-config');
var config = yaml_config.load(__dirname + '/config/config.yml');
var express  = require('express');
var app      = express();
var port     = process.env.PORT || config.server.port;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');





console.log(config.server.port);

//var configDB = require('./config/database.js');

// configuration ===============================================================
//mongoose.connect(configDB.url); // connect to our database
mongoose.connect('mongodb://JakeBrink:MagsBrink@troup.mongohq.com:10089/app22718780');

require('./config/passport')(passport); // pass passport for configuration

app.configure(function() {

	// set up our express application
	//app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms

	app.set('view engine', 'ejs'); // set up ejs for templating

	// required for passport
	app.use(express.session({ secret: 'appxfio' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session
    app.use('/assets', express.static(__dirname + '/views/assets'));
    app.use(express.compress());
});

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================

app.listen(port);

