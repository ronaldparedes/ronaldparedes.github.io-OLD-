var gulp = require('gulp'),
    browserSync = require('browser-sync').create();
    
gulp.task('watch', () => {
  
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  
  
  
});