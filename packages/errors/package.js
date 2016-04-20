Package.describe({
  name: "autoschematic:errors",
  summary: "A pattern to display application errors to the user",
  version: "1.0.2",
  documentation: null,
});

Package.onUse(function (api, where) {
  api.versionsFrom('0.9.0');

  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');

  api.addFiles(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');

  if (api.export) 
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('autoschematic:errors', 'client');
  api.use(['tinytest', 'ui', 'test-helpers', 'templating'], 'client');  

  api.addFiles('errors_tests.js', 'client');
});