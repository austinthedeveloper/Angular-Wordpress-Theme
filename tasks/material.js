module.exports = function(gulp, plugins){
	return function(){
		gulp.src('node_modules/angular-material/angular-material.js')
		.pipe(plugins.concat('material.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('build/js'));
	};
};
