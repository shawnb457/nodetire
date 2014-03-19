define(function (require, exports, module) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        appinit = require('views/assets/js/helper'),
        
        app = require('app');
         $(function () {
            EventBus = {};
            _.extend(EventBus, Backbone.Events);
            app.initialize();
            
        });

      
});
