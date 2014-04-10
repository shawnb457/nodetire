require.config({
    keepBuildDir: true,
    paths: {
        jquery: '../components/jquery/jquery',
        backbone: '../components/backbone/backbone',
        underscore: '../components/underscore/underscore',
        bootstrap: '../components/bootstrap/dist/js/bootstrap',
        raphael: '../components/raphael/raphael-min'
    },
    shim: {
        'backbone': {
            deps: ['underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        },
        'bootstrap': {
            exports: 'bootstrap'
        },
    },
    name: '../components/almond/almond',
    include: ['main'],
    insertRequire: ['main'],
    wrap: true,
    enforceDefine: true,
    cjsTranslate: true
});