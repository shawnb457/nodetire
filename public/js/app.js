define(function (require, exports, module) {
    var appRouter = require('core/router');
    var CurrentView = require('core/CurrentView');
    var helper = require('core/helper');
    var app = {};
        app.models = {};
        app.collections = {};
        app.views = {};
        app.helper = {};

    app.initialize = function () {
        app.views.current_view = new CurrentView();
       
        app.helper.new_helper = new helper();
        app.helper.new_helper.init();
        
        app.router = new appRouter(app);
       
        Backbone.history.start();
    }
    return app
});