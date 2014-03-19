define(function (require, exports, module) {
    var SingleView = Backbone.CleanupView.extend({
        className: 'single-view',
         render: function () {
           
            
            this.$el.html('<div>This is the app</div>');
        },
        cleanup: function () {
            app.log('Cleanup: SingleView (' + this.cid + ')');
        }
    });
    return SingleView;
});