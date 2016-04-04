Package.describe({
  name: 'bquarks:aerialjs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor package to connect web apps with corbel platform',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bquarks/aerialjs.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'corbel-js': '0.4.0'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript', ['client', 'server']);
    api.use('timbrandin:fetch', ['server']);
    api.use('mongo', ['client', 'server']);

    // api.addAssets('lib/resources/config/config.json', ['server']);

    // api.addFiles('lib/common.js');
    api.addFiles('lib/composr-connector/composr-connector.js', ['client','server']);

    api.addFiles('client/main.js', ['client']);

    api.addFiles('server/composr-connector/composr-connector.js', ['server']);
    api.addFiles('server/publications.js', ['server']);

    api.addFiles('server/file-to-delete.js', ['server']);

    api.export('Caca', ['client']);
});

Package.onTest(function(api) {
    api.use('tinytest');

    api.use('bquarks:aerialjs');
    // Add test files, eg:
    api.addFiles('tests/aerial-test.js');
});
