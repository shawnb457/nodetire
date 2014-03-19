// load the things we need
var mongoose = require('mongoose');


// define the schema for our user model
var vehicleSchema = mongoose.Schema({
        customer     : [Customer]
        make         : String,
        model        : String,
        year         : String,
        vin          : String,
        createdate   : { type: Date, default: Date.now },
        service      : [Service],
        payment      : String,
        schedule     : [Schedule],
        service      : [Service]
         
    

});


// create the model for users and expose it to our app
module.exports = mongoose.model('Vehicle', vehicleSchema);