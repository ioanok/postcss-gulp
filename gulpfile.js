/**
 * Created by ioan on 14.12.2015.
 */

var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');

var atImport = require('postcss-import');
var mqpacker = require('css-mqpacker');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var precss = require('precss');

var alias = require('postcss-alias');
var crip = require('postcss-crip');
var magician = require('postcss-font-magician');
var triangle = require('postcss-triangle');
var circle = require('postcss-circle');
var linkColors = require('postcss-all-link-colors');
var center = require('postcss-center');
var clearfix = require('postcss-clearfix');
var position = require('postcss-position');
var size = require('postcss-size');
var verthorz = require('postcss-verthorz');
var colorShort = require('postcss-color-short');

gulp.task('css', function () {
    /*var processors = [
        atImport,
        mqpacker,
        cssnano({
            calc: {precision: 2}
        })
    ];

    var processors = [
        precss
    ];*/

    /*var processors = [
        autoprefixer,
        cssnano
    ];*/

    var processors = [
        alias,
        crip,
        magician,
        triangle,
        circle,
        linkColors,
        center,
        clearfix,
        position,
        size,
        verthorz,
        colorShort
    ];

    /*return gulp.src('./src/!*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));*/
    return gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});