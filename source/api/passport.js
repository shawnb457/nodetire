// load all the things we need
var LocalStrategy = require('passport-local').Strategy;
// load up the user model
var User = require('../models/user');
// load the auth variables
module.exports = function (app, passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    }, function (req, email, password, done) {
        // asynchronous
        process.nextTick(function () {
            User.findOne({
                'local.email': email
            }, function (err, user) {
                console.log(err);
            });
        });
    }));
    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    }, function (req, email, password, done) {
        // asynchronous
        process.nextTick(function () {
            // check if the user is already logged ina
            if (!req.user) {
                User.findOne({
                    'local.email': email
                }, function (err, user) {
                    // if there are any errors, return the error
                    if (err){ return done(err);}
                    // check to see if theres already a user with that email
                    if (user) {
                        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
                    } else {
                        // create the user
                        var newUser = new User();
                        newUser.local.first = req.body.first;
                        newUser.local.last = req.body.last;
                        newUser.local.email = email;
                        newUser.local.password = newUser.generateHash(password);
                        newUser.save(function (err) {
                            if (err){ throw err;
                            return done(null, newUser);}
                        });
                    }
                });
            } else {
                var user = req.user;
                user.local.first = first;
                user.local.last = last;
                user.local.email = email;
                user.local.password = user.generateHash(password);
                user.save(function (err) {
                    if (err) {throw err;
                    return done(null, user)};
                });
            }
        });
    }));
};