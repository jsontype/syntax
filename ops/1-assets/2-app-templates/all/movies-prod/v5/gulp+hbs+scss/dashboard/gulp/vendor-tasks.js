'use strict';
// Packages
const gulp = require('gulp')
const config = require('../gulp.config.json')
const {argv} = require('yargs')

gulp.task('vendor', function() {
    let directory = argv.output
    if (directory === undefined) {
        directory = config.output
    }

    return gulp.src('./src/assets/vendor/**/*')
    .pipe(gulp.dest(`./${directory}/assets/vendor`))
})