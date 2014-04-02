define(function (require, exports, module) {
    var CurrentView = Backbone.View.extend({
        initialize: function () {},

        showView: function (view) {
            if (this.currentView) {
                this.currentView.close();
            }
            this.currentView = view;
            this.currentView.render();
            $("#main").html(this.currentView.el);
        }
        
    });
    return CurrentView;
});