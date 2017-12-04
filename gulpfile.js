var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();
    
gulp.task('watch', () => {
  
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('OptimizeImg', () => {
  return gulp.src('./img/railroad/**/*')
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest('./img/OptImg/'));
});