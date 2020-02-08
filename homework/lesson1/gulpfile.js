const gulp = require('gulp');
const scss = require('gulp-sass');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer')
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('scss', () => {
    return gulp.src('./app/scss/*.scss')
    .pipe(watch('app/scss/*.scss'))
    .pipe(autoprefixer())
    .pipe(sourcemaps.init())
    .pipe(scss())
    .pipe(cssnano())
    .pipe(sourcemaps.write('./app/maps'))
    .pipe(gulp.dest('dist/style'));
})

gulp.task('images', () => {
    return gulp.src('./app/img/**/*.+(png|jpg|gif|svg)')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'))
  });

gulp.task('fonts', () => {
    return gulp.src('./app/fonts/**/*')
      .pipe(gulp.dest('dist/fonts'))
  })