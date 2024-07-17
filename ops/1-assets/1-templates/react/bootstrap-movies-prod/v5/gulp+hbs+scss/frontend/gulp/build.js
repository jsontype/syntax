'use strict';
// Packages
const gulp = require('gulp')

// Build tasks
gulp.task('build', gulp.series([
    'clean',
    'style',
    'html-to-hbs',
    'vendor',
    'js',
    'font',
    'image-move'
]))