requirejs.config({
  paths: {
    modernizr : 'vendor/modernizr',
    jquery    : 'vendor/jquery',
    bootstrap : 'vendor/bootstrap'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    }
  }
});

require(['modernizr', 'jquery', 'bootstrap'], function (modernizr, $, bootstrap) {
  // after all libraries loaded
});