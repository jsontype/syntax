'use strict';
// Packages
const gulp = require('gulp')
const gulpHelper = require('./helper')

// Module object
const paths = gulpHelper.modulesOptions

// Main hbs to html generate task
gulp.task('hbs', () => {
    const obj = gulpHelper.find(paths, 'default')
    return gulpHelper.generateHtml(obj.pages, obj.dir)
})

// Function for generate hbs to html task array based on module is generate or not
function hbsTask() {
    const task = ['hbs']
    for (let index = 0; index < paths.length; index++) {
        const object = paths[index];
        if(object.generate) {
            task.push(`hbs:${object.name}`)
        }
    }
    return task
}

// Main hbs to html task
gulp.task('html-to-hbs', gulp.series(hbsTask()));