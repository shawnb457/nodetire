define(function (require, exports, module) {
    require('plugin/cleanup');
    var router = Backbone.CleanupRouter.extend({
        routes: {
            "/": "index",
            "account/:usr": "editAccount",
            "createacount": "createAccount",
            "payroll": "payRoll",
            "service": "service",
            "createcustomer": "createCustomer",
        },
        index: function () {

        },
        editAccount: function (user) {},
        createAccount: function () {},
        payRoll: function () {},
        service: function () {},
        createCustomer: function () {}
    });
    return router
});