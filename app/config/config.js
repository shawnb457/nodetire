
require.config({
  
    keepBuildDir:true,
    paths: {
        jquery: 'views/assets/js/libs/bower_components/jquery/dist/jquery',
        backbone: 'views/assets/js/libs/bower_components/backbone/backbone',
        underscore: 'views/assets/js/libs/bower_components/underscore/underscore',
       
    },
    shim: {
        'backbone': {
            deps: ['underscore'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    },
    name: 'views/assets/js/libs/bower_components/almond/almond',
    include: ['main'],
    insertRequire: ['main'],
    wrap: true,
    enforceDefine:true,
    cjsTranslate: true

});