'use strict';
module.exports = function (browserSync) {
    // Packages
    const gulp = require('gulp')
    const gulpHelper = require('./helper')

    gulp.task('watch', gulp.series(
        'clean',
        'style',
        'html-to-hbs',
        'vendor',
        'js',
        'font',
        'image-move',
        function () {
            browserSync.init({
                server: {
                    baseDir: `./${gulpHelper.directory}`,
                    index: "index.html"
                },
                reloadDelay: 1000
            });

            // Main Tasl Task

            gulp.watch('./src/templates/components/**/*.hbs', gulp.series('html-to-hbs')).on('change', browserSync.reload);

            // Hbs Task
            gulp.watch('./src/templates/layouts/**/*.hbs', gulp.series('hbs')).on('change', browserSync.reload);
            gulp.watch('./src/templates/pages/**/*.hbs', gulp.series('hbs')).on('change', browserSync.reload);
            // Scss
            gulp.watch('./src/assets/scss/**/*.scss', gulp.series('style:main'));
            // JS
            gulp.watch('./src/assets/js/**/*.js', gulp.series('js:move-main','js:move-iqonic')).on('change', browserSync.reload);

        }
    ));
}
