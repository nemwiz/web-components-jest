module.exports = {
    process(src, filename, config, options) {
        console.log('hello',src, filename, config, options)
        return '';
    }
}
