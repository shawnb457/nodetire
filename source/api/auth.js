
var middleware = require('./../middleware');
var mongoose = require('mongoose');
var user = require('./../models/user');
module.exports = function (app, passport) {
   
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