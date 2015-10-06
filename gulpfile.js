var gulp = require('gulp');
var uglify = require('gulp-uglify');
 
gulp.task('ju', function() {
  return gulp.src('src/lib/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('src/dist/'));
});


// 默认任务
gulp.task('default', function(){
    gulp.run('ju');

    // 监听文件变化
    gulp.watch('src/cov.js', function(){
        gulp.run('ju');
    });
});