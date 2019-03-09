import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import pkg from './package.json';
import resolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';

export default {
    input: 'src/lib/index.js',
    output: [
        { file: pkg.module, format: 'es'}
    ],
    plugins: [
        resolve({
            browser: true,
            extensions: ['.js', '.jsx', '.css'],
            modulesOnly: true
        }),
        babel({
            exclude: ['node_modules/**'],
            runtimeHelpers: true
        }),
        minify({
            mangle: false
        }),
        postcss({
            modules: true,
            plugins: [autoprefixer()]
        })
    ]
};