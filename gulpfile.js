var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('src/style/scss/**/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('src/style/css'))
});
gulp.task('watch',function(){
  gulp.watch('src/style/scss/**/*.scss',['sass']);
});