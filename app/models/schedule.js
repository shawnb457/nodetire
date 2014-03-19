// load the things we need
var mongoose = require('mongoose');


// define the schema for our user model
var scheduleSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
        role         : String,
        createdate   : {type: Date, default: Date.now },
        pin          : [Number],
        haspin       : String
    }

});


module.exports = mongoose.model('Schedule', scheduleSchema);