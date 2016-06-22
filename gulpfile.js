var gulp = require('gulp');

// Require Plugins
var plugins = require('gulp-load-plugins')();

// ftp
var ftp = require( 'vinyl-ftp' );
var creds = require('./ftp-cred.js');

var bases = {
 build: 'build/'
};

// Short-hand function to get a task
function getTask(task) {
    return require('./tasks/' + task)(gulp, plugins, bases);
}

gulp.task('sass', getTask('sass'));

// Delete the dist directory
gulp.task('clean', getTask('clean'));

gulp.task('js', getTask('js'));

gulp.task('angular', getTask('angular'));

gulp.task('bootstrap', getTask('bootstrap'));

gulp.task('material', getTask('material'));

// Copy all other files to dist directly
gulp.task('copy', getTask('copy'));

gulp.task('deploy', function () {

    var conn = ftp.create( creds.creds );

    var globs = creds.globs;

    // using base = '.' will transfer everything to /public_html correctly
    // turn off buffering in gulp.src for best performance

    var destUrl = creds.destination;

    gulp.src( globs, 
		    {
		    	base: '.',
		    	buffer: false 
		    } 
	    )
        .pipe(conn.newer(destUrl))
        .pipe(conn.dest(destUrl));

});

gulp.task('watch', function(){
	gulp.watch('assets/scss/**/*.scss', ['sass']);
	gulp.watch(['assets/js/**/*.js', 'assets/components/**/*.js'], ['js']);
	gulp.watch('assets/html/**/*.html', ['copy']);
	gulp.watch('assets/images/**/*', ['copy']);
})


gulp.task('init', ['copy', 'sass', 'js', 'angular', 'material', 'watch']);
gulp.task('default', ['sass','js']);