const CracoAlias = require('craco-alias');

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                baseUrl: '.',
                tsConfigPath: 'tsconfig-for-webpack-config.json',
                debug: false,
            },
        },
    ],
};

