var mongoose = require('mongoose');
var user = require('./../models/user');
var passport = require('passport');

function db() {
    mongoose.connect('mongodb://JakeBrink611:cb3aae71c3ef5e23e7038b6dac08b0b8@oceanic.mongohq.com:10017/nodetire');
    //mongoose.connect('mongodb://localhost/AppRoles');
/* router.post('/login', passport.authenticate('local-login', {
            successRedirect :'/index', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
    }));
*/
}
module.exports = db;