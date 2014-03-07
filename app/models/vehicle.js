// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var vehicleSchema = mongoose.Schema({
        make        : String,
        model       : String,
        year         : String,
        vin      : String,
        createdate   : { type: Date, default: Date.now },
        service      : [Service],
        payment      : String,
        schedule     : [Schedule],
        serviceS
         
    

});


// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);