var gulp = require('gulp'),
livereload = require('gulp-livereload');

gulp.task('scripts', function() {
gulp.src('scripts/*.js')
    .pipe(livereload());
});

gulp.task('watch', function() {
livereload.listen();
gulp.watch('scripts/*.js', ['scripts']);
});