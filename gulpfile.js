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



/*
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');

livereload({ start: true })

gulp.task('css', function(){
  return gulp.src('./src/*.css')
    .pipe(livereload());
});

gulp.task('html', function(){
  return gulp.src('./src/*.html')
    .pipe(livereload());
})

gulp.task('connect', function() {
  connect.server({
    root: './src',
    livereload: true,
  });
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('./src/*.css', gulp.series(['css']));
  gulp.watch('./src/*.html', gulp.series(['html']));

});

gulp.task('default', gulp.series(['connect', 'css','html', 'watch']));
*/