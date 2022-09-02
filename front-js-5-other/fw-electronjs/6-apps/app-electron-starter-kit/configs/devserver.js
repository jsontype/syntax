const spawn = require('cross-spawn');
const devConfig = require('./dev');
const buildConfig = require('./build');

const port = process.env.PORT || 3000;

module.exports = () => {
    const config = {
        ...devConfig,
        devServer: {
            host: 'localhost',
            port,
            compress: true,
            noInfo: true,
            stats: 'errors-only',
            inline: true,
            lazy: false,
            hot: true,
            headers: { 'Access-Control-Allow-Origin': '*' },
            watchOptions: {
                aggregateTimeout: 300,
                ignored: /node_modules/,
                poll: 100,
            },
            before() {
                spawn('npm', ['run', 'start-main-dev'], {
                    shell: true,
                    env: process.env,
                    stdio: 'inherit',
                })
                    .on('close', (code) => process.exit(code))
                    .on('error', (spawnError) => console.error(spawnError));
            },
        },
    };

    config.output.filename = buildConfig.output.filename;

    return config;
};
