let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .extract(
        ['axios', 'vue','vuex', 'vue-router', 'element-ui'],
        'public/js/vendor.js'
    )
    .styles(
        ['node_modules/element-ui/lib/theme-chalk/index.css'],
        'public/css/app.css'
    )
    //.version()
;
