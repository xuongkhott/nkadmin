module.exports = function override(config, _env) {
    let rules = config.module.rules[1].oneOf
    rules.splice(rules.length - 1, 0, {
        test: /\.txt$/i,
        use: 'raw-loader',
    })

    return config
}