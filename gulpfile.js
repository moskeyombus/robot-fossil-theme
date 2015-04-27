var
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  gulp = require('gulp'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  minifyCSS = require('gulp-minify-css');
 
gulp.task('sass', function () {
  gulp.src('./scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src([
      './css/main.css'
    ])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./build/'));
});

gulp.task('build-css', function () {
  gulp
    .src([
      './node_modules/bootstrap/dist/css/bootstrap.min.css',
      './node_modules/font-awesome/css/font-awesome.min.css',
      './node_modules/devicons/css/devicons.min.css',     
      './build/main.css'
    ])
    .pipe(concat('robotfossil.min.css'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('uglify', function() {
  gulp.src([
      './js/main.js'
    ])
    .pipe(uglify({}))
    .pipe(gulp.dest('./build/'));
});

gulp.task('browserify', function() {
  return browserify([
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/bootstrap/dist/js/bootstrap.min.js',
      './js/main.js'
    ])
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('robotfossil.min.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('./js/'));
});

gulp.task('move-js', function () {
  gulp
    .src([
      './node_modules/jquery/dist/jquery.min.map'
    ])
    .pipe(gulp.dest('./js/'));
});

gulp.task('move-fonts', function () {
  gulp
    .src([
      './node_modules/font-awesome/fonts/fontawesome-webfont.eot',
      './node_modules/font-awesome/fonts/fontawesome-webfont.svg',
      './node_modules/font-awesome/fonts/fontawesome-webfont.ttf',
      './node_modules/font-awesome/fonts/fontawesome-webfont.woff',
      './node_modules/font-awesome/fonts/fontawesome-webfont.woff2',      
      './node_modules/font-awesome/fonts/FontAwesome.otf'
    ])
    .pipe(gulp.dest('./fonts/'));
});

// build task
gulp.task('build',
  ['sass', 'minify-css', 'uglify', 'move-js', 'move-fonts', 'browserify', 'build-css']
);