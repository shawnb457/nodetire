var bcrypt = require('bcrypt-nodejs');

var middleware = require('./../middleware');
var mongoose = require('mongoose');
var user = require('./../models/user');

module.exports = function (app, passport) {
           
    
        app.get('/signup', function(req, res) {
            res.render('signup.ejs', { message: req.flash('signupMessage') });
        });

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/master', // redirect to the secure profile section
            failureRedirect : '/signup', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));
};