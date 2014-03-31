var bcrypt = require('bcrypt-nodejs');
var _ = require('underscore');
var middleware = require('./../middleware');
var mongoose = require('mongoose');
var user = require('./../models/user');
module.exports = function (app, passport) {
    //mongoose.connect('mongodb://JakeBrink611:cb3aae71c3ef5e23e7038b6dac08b0b8@oceanic.mongohq.com:10017/nodetire');
    mongoose.connect('mongodb://localhost/AppRoles');
    app.get('/login', function (req, res) {
        console.log(req);
    });
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/master',
        // redirect to the secure profile section
        failureRedirect: '/login',
        // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    app.get('/logout', function (req, res) {
        req.session.destroy();
        req.logout();
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
};