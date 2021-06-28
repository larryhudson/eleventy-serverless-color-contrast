const {EleventyServerlessBundlerPlugin} = require('@11ty/eleventy');
const colorContrast = require('color-contrast');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
        name: 'ondemand',
        functionsDir: './netlify/functions',
        inputDir: './src'
    })

    eleventyConfig.addFilter('contrastRatioAgainst', (a='white', b='black') => {
        if (a === '' || b === '') {
            return null
        }
        return colorContrast(a, b)
    })

    return {
        dir: {
            input: './src'
        }
    }
}