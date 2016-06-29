module.exports = function(gulp, plugins, bases){
	return function() {
		// Copy html
		 gulp.src(['**/*.html'], {cwd: 'assets/html'})
		 .pipe(gulp.dest(bases.build + 'html'));

		 // Copy images
		 gulp.src(['**/*'], {cwd: 'assets/images'})
		 .pipe(gulp.dest(bases.build + 'images'));

		 // Copy fonts
		 gulp.src(['**/*'], {cwd: 'assets/fonts'})
		 .pipe(gulp.dest(bases.build + 'fonts'));
	};	
};