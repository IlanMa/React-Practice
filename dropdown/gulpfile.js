var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

gulp.task('default', function() {
	var bundler = watchify(browserify({
		entries: ['./src/app.jsx'],
		transform: [reactify], // Compile jsx to js
		extensions: ['.jsx'],
		debug: true,
		cache: {},
		packageCache: {},
		fullPaths: true
	}));

	function build(file) {
		if (file) gutil.log('Recompiling ' + file);
		return bundler
			.bundle()
			.on('error', gutil.log.bind(gutil, 'Browserify Error')) // If error occures during bundle, log the error
			.pipe(source('main.js')) // Put into main.js
			.pipe(gulp.dest('./')); // Save into working directory
	};
	build()
	bundler.on('update', build) // Whenever a change occurs, build again
});