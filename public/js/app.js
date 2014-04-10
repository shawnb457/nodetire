define(function (require, exports, module) {
    var appRouter = require('core/router');
    var currentView = require('core/CurrentView');
    var header = require('apps/header/views/headerView');
    var leftNav = require('apps/leftnav/views/leftNav');

    var helper = require('core/helper');
    var app = {};
    app.models = {};
    app.collections = {};
    app.views = {};
    app.helper = {};
    app.initialize = function () {
        app.views.current_view = new currentView();
        app.views.header_view = new header();
        app.views.left_view = new leftNav();
        app.helper.new_helper = new helper();
        app.helper.new_helper.init();
        app.router = new appRouter(app);
        Backbone.history.start();
    }
    return app
});