var calc = require("postcss-calc");
var presetEnv = require('postcss-preset-env');
var stylelint = require("stylelint");
// var reporter = require("postcss-reporter");
// var customUnit = require("postcss-custom-unit")

module.exports = {
    syntax: 'postcss-scss',
    plugins: [
        calc(),
        presetEnv({
            browsers: ['iOS 9', 'Android 4.4', '> .5% or last 2 versions'],
            autoprefixer: true,
            stage: 3,
        }),
        // stylelint(),
        // reporter({
        //     clearMessages: true,
        //     throwError: true
        // })
    ]
};
