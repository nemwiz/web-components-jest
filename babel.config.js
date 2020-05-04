module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
    ],
    plugins: [
        '@babel/plugin-proposal-decorators',
        '@babel/plugin-proposal-class-properties',
        // 'transform-es2015-modules-commonjs',
    ]
};
