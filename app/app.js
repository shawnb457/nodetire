define(function (require, exports, module) {
    var appRouter = require('views/router');
    var indexView = require('views/boneviews/index');
    var app = {};

    app.initialize = function () {
        app.router = new appRouter({
            'app': app
        });
        Backbone.history.start();
       var index = new indexView();
       index.render();
       $('#view').empty().append(index.$el);
     
    }
    return app
});

