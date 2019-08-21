// svelte.config.js
import sveltePreprocess from 'svelte-preprocess';

const preprocessOptions = {
    transformers: {
        scss: {
            includePaths: [
                'node_modules',
                'src'
            ]
        },
        postcss: {
            plugins: [
                require('autoprefixer')({
                    browsers: 'last 2 versions',
                }),
            ]
        }
    },
}
module.exports = {
    preprocess: sveltePreprocess(preprocessOptions)
}