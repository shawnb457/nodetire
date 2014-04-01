var _ = require('underscore');
var client = require('./../client');

function skipMaster(req) {
    return _.any(['/api', '/components', '/css', '/js', '/build'], function (url) {
        return req.url.substr(0, url.length) === url;
    });
}
//app.all('/api/*', requireAuthentication);



function hander(title, mainJs, mainCss) {
    return function (req, res, next) {
        if (skipMaster(req)) {
            return next();
        }
       
        if (req.isAuthenticated()) {

            res.render('master', {
                title: title,
                mainJs: mainJs,
                mainCss: mainCss
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
        return hander('SPA Boilerplate | Development', '/public/js/main.js', '/public/css/main.css');
    },
    production: function () {
        return hander('SPA Boilerplate | Production', client.js, client.css);
    }
};