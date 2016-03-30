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
    api.use('mongo', ['client', 'server']);

    api.addFiles('lib/common.js');

    api.addFiles('client/collections/aerialjs.js', ['client']);
    api.addFiles('client/aerialjs-main.js', ['client']);
    api.addFiles('server/collections/aerialjs.js', ['server']);
    api.addFiles('server/aerialjs.js', ['server']);
    api.addFiles('server/external.js', ['server']);
    api.addFiles('server/publications.js', ['server']);

    api.export('AerialClient', ['client']);
    api.export('Aerial', ['client']);
    api.export('Collection', ['client', 'server']);

});

Package.onTest(function(api) {
    api.use('tinytest');

    api.use('bquarks:aerialjs');
    // Add test files, eg:
    api.addFiles('tests/aerial-test.js');
});
