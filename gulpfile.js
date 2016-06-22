var gulp = require('gulp');

// Require Plugins
var plugins = require('gulp-load-plugins')();

// ftp
var ftp = require( 'vinyl-ftp' );
var creds = require('./ftp-cred.js');

var bases = {
 build: 'build/'
};

gulp.task('sass', function(){
	gulp.src('assets/scss/styles.scss')
		.pipe(plugins.sass().on('error', plugins.sass.logError))
		.pipe(plugins.minifyCss({compatibility:'ie8'}))
		.pipe(gulp.dest('build/css/'));
	
});

// Delete the dist directory
gulp.task('clean', function() {
 return gulp.src(bases.build)
 .pipe(plugins.clean());
});

gulp.task('js', function(){
	gulp.src(['assets/js/**/*.js', 'assets/components/**/*.js'])
		.pipe(plugins.concat('scripts.js'))
		.pipe(gulp.dest('build/js'));
});

gulp.task('angular', function(){
	gulp.src([
		'node_modules/angular/angular.min.js',
		'node_modules/angular-resource/angular-resource.min.js',
		'node_modules/angular-sanitize/angular-sanitize.min.js',
		'node_modules/angular-animate/angular-animate.min.js',
		'node_modules/angular-aria/angular-aria.min.js',
		'node_modules/angular-messages/angular-messages.min.js',
		'node_modules/angular-ui-router/release/angular-ui-router.min.js',
		'node_modules/underscore/underscore.js',
		'node_modules/angular-filter/dist/angular-filter.js',
	])
	.pipe(plugins.concat('angular.min.js'))
	.pipe(gulp.dest('build/js'));
	
	gulp.src([
		'node_modules/angular/angular.min.js.map', 
		'node_modules/angular-resource/angular-resource.min.js.map'
	])
	.pipe(gulp.dest('build/js'));
	
	gulp.src([
		'node_modules/tinymce/themes/modern/*.js',
	])
	.pipe(gulp.dest('build/js/themes/modern/'));
})

gulp.task('bootstrap', function(){
	gulp.src('node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js')
	.pipe(plugins.concat('bootstrap.js'))
	.pipe(gulp.dest('build/js'));
});

gulp.task('material', function(){
	gulp.src('node_modules/angular-material/angular-material.js')
	.pipe(plugins.concat('material.js'))
	.pipe(gulp.dest('build/js'));
});

// Copy all other files to dist directly
gulp.task('copy', function() {
 // Copy html
 gulp.src(['**/*.html'], {cwd: 'assets/html'})
 .pipe(gulp.dest(bases.build + 'html'));

 // Copy images
 gulp.src(['**/*'], {cwd: 'assets/images'})
 .pipe(gulp.dest(bases.build + 'images'));

});

gulp.task( 'deploy', function () {

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