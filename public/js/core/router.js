define(function (require, exports, module) {
   
   var calView = require('apps/cal/views/indexView');
   
    
    var Router = Backbone.Router.extend({
        routes: {
            '': 'login',
            'login': 'login',
            'signup':'signup',
            'cal': 'cal'
        },
        app:'',

        initialize: function(appholder) {
            this.app = appholder;
        },
        cal: function () {
            this.app.views.cal = new calView();

            this.app.views.current_view.showView(this.app.views.cal);
            
            
        },
        signup:function (){
           
        }
    });
    return Router;
});