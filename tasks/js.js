module.exports = function(gulp, plugins){
	return function(){
		gulp.src(['assets/js/**/*.js', 'assets/components/**/*.js'])
		.pipe(plugins.concat('scripts.js'))
		.pipe(gulp.dest('build/js'));
	};	
};