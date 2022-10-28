const devConfig = require('./dev');

module.exports = {
    ...devConfig,
    devtool: false,
    mode: 'production',
    target: 'electron-main',
    output: {
        filename: 'app.min.js',
    },
};
