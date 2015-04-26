var
  gulp = require('gulp'),
  sass = require('gulp-sass');
 
gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// build task
gulp.task('build',
  ['sass']
);