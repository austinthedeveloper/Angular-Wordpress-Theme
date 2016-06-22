module.exports = function(gulp, plugins){
	return function() {
		gulp.src('assets/scss/styles.scss')
		.pipe(plugins.sass().on('error', plugins.sass.logError))
		.pipe(plugins.minifyCss({compatibility:'ie8'}))
		.pipe(gulp.dest('build/css/'));
	};	
};