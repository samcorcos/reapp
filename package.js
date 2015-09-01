Package.describe({
  name: 'samcorcos:reapp',
  version: '0.0.1',
  summary: 'Reapp.io for Meteor',
  git: 'https://github.com/samcorcos/reapp',
  documentation: 'README.md'
});

Npm.depends({
  'exposify': '0.4.3',
  'reapp-ui': '0.12.49'
})

Package.onUse(function(api) {
  api.use(['react@0.1.7', 'cosmos:browserify@0.5.0']);
  api.imply(['react@0.1.7']);

  api.addFiles([
    'app.browserify.options.json',
    'app.browserify.js',
    'main.import.jsx'
  ])
});
