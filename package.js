Package.describe({
  name: 'samcorcos:reapp',
  version: '0.0.1',
  summary: 'Reapp.io for Meteor',
  git: 'https://github.com/samcorcos/reapp',
  documentation: 'README.md'
});

Npm.depends({
  'reapp': '0.8.28'
})

Package.onUse(function(api) {
  api.use(['react@0.1.7']);
  api.imply(['react@0.1.7']);

  api.addFiles([
    'reapp.jsx'
  ])

  api.export('Reapp')
});
