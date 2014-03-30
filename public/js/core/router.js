define(function (require) {
    var Backbone = require('Backbone');
    var viewManager = require('./viewManager');
    var Router = Backbone.Router.extend({
        routes: {
            '': 'login',
            'login': 'login',
            'cal': 'cal'
        },
        login: function () {
            require('./../apps/login/app').run(viewManager);
        }
    });
    return Router;
});