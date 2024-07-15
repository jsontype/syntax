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
                    index: "dashboard/index.html"
                },
                reloadDelay: 1000
            });

            // HBS
            gulp.watch('./src/templates/**/*.hbs', gulp.series('html-to-hbs')).on('change', browserSync.reload);
            // Scss
            gulp.watch('./src/assets/scss/**/*.scss', gulp.series('style:main'));
            // JS
            gulp.watch('./src/assets/js/**/*.js', gulp.series('js:move-main','js:move-iqonic')).on('change', browserSync.reload);

        }
    ));
}
