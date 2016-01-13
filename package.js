Package.describe({
  name: "riza:telescope-messages",
  summary: "Fork of Telescope messages package",
  version: "0.25.6",
  git: "https://github.com/rizafahmi/telescope-messages.git"
});

Package.onUse(function(api) {
  
  api.versionsFrom("METEOR@1.0");

  api.use(['telescope:lib@0.25.6']);

  api.addFiles([
    'lib/modules.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/messages.js',

    'lib/client/templates/messages.html',
    'lib/client/templates/messages.js',
    'lib/client/templates/message_item.html',
    'lib/client/templates/message_item.js'
  ], 'client');

  api.export('Messages', 'client');
});
