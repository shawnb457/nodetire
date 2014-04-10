var _ = require('underscore');
var client = require('./../client');
require('date-utils');

function skipMaster(req) {
    return _.any(['/api', '/components', '/css', '/js', '/build'], function (url) {
        return req.url.substr(0, url.length) === url;
    });
}

var wkDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
   


function hander(title, mainJs, mainCss) {
    return function (req, res, next) {
        if (skipMaster(req)) {
            return next();
        }
          date = new Date();
        var tempday = date.getDay();
       
        if (req.isAuthenticated()) {
            res.render('master', {
                title: title,
                user: req.user,
                date: date,
                day: tempday=wkDays[tempday]
            });
        } else {
            res.render('login', {
                title: title,
                mainJs: mainJs,
                mainCss: mainCss
            });
        }
    };
}
module.exports = {
    development: function () {
        return hander('SPA Boilerplate | Development', '/js/main.js', '/css/main.css');
    },
    production: function () {
        return hander('SPA Boilerplate | Production', client.js, client.css);
    }
};