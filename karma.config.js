var webpackConfig = require('./config/webpack.config.dev.js');
webpackConfig.entry = {};

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],

        reporters: ['progress'],
        port: 9876,
        colors: false,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
        autoWatchBatchDelay: 300,

        files: [
            './app/bundle.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './tests/**/*.js'
        ],

        preprocessors: {
            './app/bundle.js': ['webpack'],
            './tests/**/*.spec.js': ['babel']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        }
    });
};

