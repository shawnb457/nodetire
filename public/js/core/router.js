define(function (require, exports, module) {
    var calView = require('apps/cal/views/indexView');
    var Router = Backbone.Router.extend({
        routes: {
            '': 'master',
            'cal': 'cal'
        },
        app: '',
        initialize: function (appholder) {
            this.app = appholder;
        },
        master: function(){
            //console.log(window.location)
        //window.location.assign('/login');
        },
        cal: function () {
            this.app.views.cal = new calView();
            this.app.views.current_view.showView(this.app.views.cal);
        }
        
    });
    return Router;
});