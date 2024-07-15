'use strict';
// Packages
const gulp = require('gulp')
const del = require('del')
const config = require('../gulp.config.json')
const {argv} = require('yargs')

// Clean task
gulp.task('clean', function() {
    let directory = argv.output
    if (directory === undefined) {
        directory = config.output
    }
    return del([`./${directory}/**/*`])
})