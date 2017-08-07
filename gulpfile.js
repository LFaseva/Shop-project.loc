var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minify = require('gulp-minify-css');

gulp.task('build', function(){
    gulp.src('./css/*.less')
        .pipe(less())
        .pipe(minify())
         .pipe(autoprefixer({
         browsers: ['> 0.01%'],
         cascade: false
         }))
        .pipe(gulp.dest('./postcss'));
});

gulp.task('watch', function(){
    gulp.watch('./css/*.less', ['build']);
});