define(function (require, exports, module) {
    var leftnavtemplate = require('tpl!../templates/leftNav.jst');
    var leftNav = Backbone.View.extend({
        el:'#leftNav',
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
            var template = leftnavtemplate;
            debugger

            this.$el.html(template());
        }
    });
    return leftNav;
});