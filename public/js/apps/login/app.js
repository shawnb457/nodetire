define(function(require) {
    var LoginView = require('./views/LoginViews');

    return {
        run: function (viewManager) {
            var view = new LoginView();
            viewManager.show(view);
        }
    };
});