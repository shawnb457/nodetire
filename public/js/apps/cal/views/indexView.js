define(function (require, exports, module) {
 var indexView = Backbone.View.extend({
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
            
            this.$el.html('<div>This is a test</div>');
           
        }

    });
 return indexView;
});