define(function (require, exports, module) {
    var headertemplate = require('tpl!../templates/header.jst');
    var headerView = Backbone.View.extend({
        el:'#header',
        events: {
            "keyup #searchUser": "search",
            "click .linkaccounts": "linkaccounts",
            "click #backtohubaccounts": "back",
            "click #search": "search",
            "click .btn-group ": "providerHandler",
            "click .addField": "addField",
            "click #next": "linkAccount"
        },
        initialize: function () {
            this.render();
        },
        render: function () {
            var template = headertemplate;
            this.$el.html(template());
        }
    });
    return headerView;
});