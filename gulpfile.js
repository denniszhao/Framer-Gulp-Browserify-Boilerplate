var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');

gulp.task('watch', function () {
    // Watches for any changes in ./app.js

    var bundler = watchify(browserify('./app.js'));

    bundler.on('update', rebundle);

    function rebundle() {
        console.log("Bundling...");

        return bundler.bundle()
            .on('error', function(e) {
                gutil.log("Browserify error", e);
            })
            .pipe(source('./build.js'))
            .pipe(gulp.dest('./'));
    }

    return rebundle();
});
