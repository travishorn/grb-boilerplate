requirejs.config({
  paths: {
    srcScripts: '../../src/javascripts/'
  },
  shim: {
    'jasmine': {
      exports: 'jasmine'
    },
    'jasmine-html': {
      deps: [
        'jasmine'
      ]
    }
  }
});

/*
*  If you have more than one spec file, include it here. By default, all specs
*  are included in the spec.js file.
*/
require(['jasmine', 'jasmine-html', 'spec'], function (jasmine, jasmineHtml, spec) {
  jasmine.getEnv().addReporter(
    new jasmine.HtmlReporter()
  );

  jasmine.getEnv().execute();
});