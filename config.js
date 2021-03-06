var config = module.exports = {};

config.constants = {
  BUFFER_CLIENT_ID: '1234567890',
  BUFFER_API_URL: 'http://localhost:9292/https://api.bufferapp.com/1/',
  CONNECT_URL: 'https://bufferapp.com/oauth2/authorize',
  REDIRECT_URI: 'http://www.google.co.uk',
  EXCHANGE_OAUTH_CODE_URL: 'http://localhost:9292/http://localhost:1337/',
  TOKEN_KEY: 'accessToken'
};

config.path = {
  build:          './www',
  styles:         ['./src/**/*.less'],
  scripts:        ['./src/**/*.js'],
  configScripts:  ['./src/**/*.cfg'],
  views:          ['./src/**/*.jade'],
  fonts:          ['./src/fonts/**/*'],
  images:         ['./src/images/**/*'],
  manifest:       ['./src/manifest.webapp']
};

config.vendor = {
  fonts: [
    'bower_components/building-blocks/fonts/**/*'
  ],
  scripts: [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/lodash/dist/lodash.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-animate/angular-animate.js',
    'bower_components/angular-sanitize/angular-sanitize.js',
    'bower_components/angular-touch/angular-touch.js',
    'bower_components/angular-ui-router/release/angular-ui-router.js',
    'bower_components/angular-cache/dist/angular-cache.js'
  ],
  styles: [
    'bower_components/building-blocks/util.css',
    'bower_components/building-blocks/fonts.css',
    'bower_components/building-blocks/transitions.css',
    'bower_components/building-blocks/icons/**/*.css',
    'bower_components/building-blocks/style/**/*.css',
    'bower_components/building-blocks/style_unstable/**/*.css'
  ],
  images: [
    'bower_components/building-blocks/icons/**/*.png',
    'bower_components/building-blocks/style/**/*.png',
    'bower_components/building-blocks/style_unstable/**/*.png'
  ]
};