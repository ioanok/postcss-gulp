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

    var processors = [
        autoprefixer,
        cssnano
    ];

    /*return gulp.src('./src/!*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));*/
    return gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});