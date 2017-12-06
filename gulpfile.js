var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
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
    .pipe(imagemin(
      [
      imageminMozjpeg()
      //imagemin.jpegtran({progressive: true})
      ],
      {
        verbose: true 
      }))
    .pipe(gulp.dest('./img/optImg/'));
});