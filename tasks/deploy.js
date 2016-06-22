module.exports = function(gulp, plugins){
	return function () {
		// ftp
		var ftp = require( 'vinyl-ftp' );
		var creds = require('../ftp-cred.js');

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

	};	
};