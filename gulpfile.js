var gulp = require('gulp');

// Require All Plugins
var plugins = require('gulp-load-plugins')();
var bases = {
 build: 'build/'
};

// Short-hand function to get a task
function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins, bases);
}

// Runs sass. Does not watch by itself
gulp.task('sass', getTask('sass'));

// Delete the dist directory
gulp.task('clean', getTask('clean'));

// Combine all app js files
gulp.task('js', getTask('js'));

// Angular files
gulp.task('angular', getTask('angular'));

// Copy all other files to dist directly
gulp.task('copy', getTask('copy'));

// FTP task
gulp.task('deploy', getTask('deploy'));

gulp.task('watch', function(){
	gulp.watch('assets/scss/**/*.scss', ['sass']);
	gulp.watch(['assets/js/**/*.js', 'assets/components/**/*.js'], ['js']);
	gulp.watch('assets/html/**/*.html', ['copy']);
	gulp.watch('assets/images/**/*', ['copy']);
})

gulp.task('init', ['copy', 'sass', 'js', 'angular', 'watch']);
gulp.task('default', ['sass','js']);