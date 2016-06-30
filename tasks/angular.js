module.exports = function(gulp, plugins){
	return function(){
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
			'node_modules/angular-material/angular-material.js'
		])
		.pipe(plugins.concat('angular.min.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('build/js'));
		
		gulp.src([
			'node_modules/angular/angular.min.js.map', 
			'node_modules/angular-resource/angular-resource.min.js.map'
		])
		.pipe(gulp.dest('build/js'));
	};	
};