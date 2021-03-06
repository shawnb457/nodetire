var express = require('express');
var http = require('http');
var https = require('https');
var path = require('path');
var passport = require('passport');
var middleware = require('./source/middleware');
var flash = require('connect-flash');
var app = express();
var mongoose = require('mongoose');

var mongoURI = "mongodb://MagsBrink878:JakeBrink611@oceanic.mongohq.com:10017/nodetire";

var MongoDB = mongoose.connect(mongoURI).connection;
MongoDB.on('error', function(err) { console.log(err.message); });
MongoDB.once('open', function() {
  console.log("mongodb connection open");
});

//mongoose.connect('mongodb://MagsBrink878:JakeBrink611@oceanic.mongohq.com:10017/nodetire',function(err) { if (err) console.log(err);});
//mongoose.connect('mongodb://localhost/AppRoles');
app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(middleware.cors());
    app.use(express.favicon());
    //app.use(express.logger('dev'));
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.session({
        secret: 'appxfio'
    })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash());
});

require('./source/api/auth')(app, passport);
require('./source/api/signup')(app, passport);
require('./source/api/passport')(passport);


app.configure('development', function () {
    app.use(express.errorHandler());
    app.use('/assets', express.static('./public'));
    app.use(middleware.serveMaster.development());
});
app.configure('production', function () {
    app.use(express.compress());
    app.use(express.static(path.join(__dirname, 'public'), {
        maxAge: oneMonth
    }));
    app.use(middleware.serveMaster.production());
});

http.createServer(app).listen(app.get('port'), function () {
    var environment = process.env.NODE_ENV || 'development';
});