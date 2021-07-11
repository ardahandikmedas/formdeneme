var browsersync = require('browser-sync').create();
var gulp = require('gulp');

gulp.task('browsersync', function(){
  var files = [
    './src/*.css'
  ];
  browsersync.init(files, {
    server: {
      baseDir: './src'
    }
  });
});

gulp.task('css', function(){
  return gulp.src('./src/*.css')
    .pipe(browsersync.stream());
});

gulp.task('watch',function(){
  gulp.watch('./src/*.css', gulp.series(['css']));
});

gulp.task('default', gulp.series(['browsersync']));



