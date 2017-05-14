var path = require('path');

module.exports = function (config) {
    config.set({
        basePath: 'app',
        files: ['**/*.spec.js'],
        frameworks: ['phantomjs-shim', 'jasmine'],

        browsers: ['PhantomJS'],
        plugins: [
            require('karma-phantomjs-launcher'),
            'karma-phantomjs-shim',
            'karma-spec-reporter',
            'karma-webpack',
            'karma-jasmine'
        ],
        reporters: ['spec'],
        preprocessors: {
            "**/*.js": ["webpack"]
        },
        webpackMiddleware: {
            stats: "errors-only"
        },
        singleRun: true,
        webpack: {
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: [{loader: 'babel-loader'}],
                    }
                ]
            }
        }
    });
};
