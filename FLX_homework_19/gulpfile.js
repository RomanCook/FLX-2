const {src, dest, task, series, watch} = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

//html
let htmlTask = () => {
  return src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'))
    .pipe(browserSync.reload({stream: true}))
}
//js
let jsTask = () => {
      return src('src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/js/'))
        .pipe(browserSync.reload({stream: true}))
}
//

//sass
let sassTask = () => {
  return src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(dest('./dist/css/'))
    .pipe(browserSync.reload({stream: true}))
}
task('sass:watch', function () {
  watch('./src/sass/*.scss', ['sass']);
});
//

//imageMin
let imgMin = () => {
    return src('src/img/*')
        .pipe(imagemin())
        .pipe(dest('dist/img/'))
};
//

//browser-sync
let serverTask = () => {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    })
};

task('default', series(htmlTask, sassTask, jsTask, imgMin));


exports.serve = () => {
    serverTask();
    watch('./src/*.html', htmlTask);
    watch('./src/sass/*.scss', sassTask);
    watch('./src/js/*.js', jsTask);
}