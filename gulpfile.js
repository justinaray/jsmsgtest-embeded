var gulp = require('gulp');
var watch = require('gulp-watch');
var del = require('del');

// var paths = {
//   scripts: ['client/js/**/*.coffee', '!client/external/**/*.coffee'],
//   images: 'client/img/**/*'
// };

gulp.task('clean', function(cb) {
    del(['build', 'dist'], cb);
});

// gulp.task('compile-js', ['clean'], function(cb) {
//     return gulp.src('src/main/js')
// });

gulp.task('package', ['clean'], function(cb) {
    gulp.src(['bower_components/**']).pipe(gulp.dest('dist/vendor'));
    gulp.src(['public/**']).pipe(gulp.dest('dist'));
});

// gulp.task('default', function() {
//     gulp.watch('public/**', ['package']);
// });
