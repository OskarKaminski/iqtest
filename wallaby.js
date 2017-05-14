var wallabyWebpack = require('wallaby-webpack');
var wallabyPostprocessor = wallabyWebpack({});

module.exports = function (wallaby) {
    return {
        files: [
            {pattern: 'app/Reducers/**/*.js', load: false},
            {pattern: 'app/Reducers/**/*.spec.js', ignore: true}
        ],

        tests: [
            {pattern: 'app/Reducers/**/*.spec.js', load: false}
        ],

        compilers: {
            '**/*.js': wallaby.compilers.babel({
                presets: ['es2015', 'stage-2']
            })
        },

        postprocessor: wallabyPostprocessor,
        setup: function () {
            // required to trigger test loading
            window.__moduleBundler.loadTests();
        }
    };
};
