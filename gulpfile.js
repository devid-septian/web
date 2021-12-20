const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const nunjucksRender = require('gulp-nunjucks-render');

// compile scss into css
function style() {
  // 1. where is my SCSS file
  return gulp.src('./src/scss/style.scss')
  // 2. pass that file through SASS compiler
    .pipe(sass().on('error', sass.logError))
  // 3. where do I save the compiled CSS?
    .pipe(gulp.dest('./dist/css'))
  // 4. stream changes to all browser
    .pipe(browserSync.stream());
}

function nunjucks() {
  return gulp.src(
    'src/templates/**/*.html',
    '!./src/templates/components/*.html',
    '!./src/templates/layout.html',
    '!./src/templates/components/header.html',
    '!./src/templates/components/footer.html'
    )
    .pipe(nunjucksRender({
      path: ['src/templates/'] // String or Array
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./src/scss/**/*.scss', style)
  gulp.watch('src/templates//**/*.html', nunjucks)
  gulp.watch('/*.html').on('change', browserSync.reload);
  gulp.watch('./dist/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.nunjucks = nunjucks;
exports.watch = watch;