var gulp = require('gulp');

var postcss = require('gulp-postcss');
var lostgrid = require('lost');

gulp.tast('styles', function(){
  gulp.src('src/scss/app.css')
  .pipe(postcss([
    lostgrid()
  ]))
  .pipe(gulp.dest('src/scss/'));
});

gulp.task('default', function(){
  gulp.start('styles');
});
