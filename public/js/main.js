define(function (require, exports, module) {
    var _ = require('underscore'),
        $ = require('jquery'),
        Backbone = require('backbone'),
        bootstrap = require('bootstrap'),
        raphael = require('raphael'),

        app = require('app');
    $(function () {
        EventBus = {};
        _.extend(EventBus, Backbone.Events);
        app.initialize();
    });
});