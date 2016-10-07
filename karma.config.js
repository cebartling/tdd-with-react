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
            './src/index.js',
            './src/**/*.spec.js'
        ],

        preprocessors: {
            './src/index.js': ['webpack'],
            './src/**/*.spec.js': ['babel']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        }
    });
};

