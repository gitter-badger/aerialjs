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
    api.use('ecmascript');
    api.addFiles('server/aerialjs.js');
});

Package.onTest(function(api) {
    api.use(["mike:mocha-package", "practicalmeteor:chai", "practicalmeteor:sinon"]);

    api.use('bquarks:aerialjs');
    // Add test files, eg:
    api.addFiles('tests/aerial-test.js');
});

