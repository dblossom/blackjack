/**
 * Gulp task runner...
 * Read more about Gulp: http://gulpjs.com/
 */

var gulp = require('gulp');

// This is a Gulp Plugin for TypeScript.
var typescript = require('gulp-tsc');

/**
 * Handles error
 * @param err - the error
 */
function handleError(err) {
	  console.log(err.toString());
	  this.emit('end');
	}

/**
 * Gulp task compiles typescript and outputs to dist dir
 */
gulp.task('compile-typescript', function() {
	var typescriptPaths = {
		src:  ['src/*.ts'],
		dest: 'dist/' 
	};

	return gulp.src(typescriptPaths.src)
        .pipe(typescript({
        	emitError: false
        }))
        .pipe(gulp.dest(typescriptPaths.dest));
});

/**
 * Default task
 */
gulp.task('default', function() {
	gulp.watch('src/*.ts', ['compile-typescript']);
});