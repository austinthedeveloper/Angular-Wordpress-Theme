module.exports = function(gulp, plugins){
	return function(){
		gulp.src('node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js')
		.pipe(plugins.concat('bootstrap.js'))
		.pipe(gulp.dest('build/js'));
	};	
};