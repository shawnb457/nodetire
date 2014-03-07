// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var customerSchema = mongoose.Schema({
        first        : String,
        middle       : String,
        last         : String,
        id           :[Schema.ObjectId], 
        vehicle      : String,
        createdate   : { type: Date, default: Date.now },
        service      : String,
        payment      : String,
        notes:        :[{ body: String, date: Date }],
        schedule     : [Schedule],
        technician   : [User]   
    

});


// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);