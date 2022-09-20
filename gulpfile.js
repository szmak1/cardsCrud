const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask() {
    return src('app/scss/style.scss', { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('dist', { sourcemaps: '.' }));
}

// JavaScript Task
function jsTask() {
    // add script js and data.js
    return src(['app/js/script.js', 'app/js/data.js'], { sourcemaps: true })
        .pipe(terser())
        .pipe(dest('dist', { sourcemaps: '.' }));
}

// Browsersync Tasks
function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.',
        },
    });
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

// Watch Task
function watchTask() {
    watch('*.html', browsersyncReload);
    watch(
        ['app/scss/**/*.scss', 'app/js/**/*.js'],
        series(scssTask, jsTask, browsersyncReload)
    );
}

// Commit and push files to Git
function git(done) {
    return exec('git add . && git commit -m "netlify deploy" && git push');
    done();
}

// Watch for netlify deployment
function netlify(done) {
    return new Promise(function (resolve, reject) {
        console.log(execSync('netlify watch').toString());
        resolve();
    });
}

// Preview Deployment
function netlifyOpen(done) {
    return exec('netlify open:site');
    done();
}

// Deploy command
exports.deploy = series(git, netlify, netlifyOpen);

// Default Gulp task
exports.default = series(scssTask, jsTask, browsersyncServe, watchTask);
