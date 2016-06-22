module.exports = function(gulp, plugins, bases){
	return function() {
		return gulp.src(bases.build)
		.pipe(plugins.clean());
	};	
};