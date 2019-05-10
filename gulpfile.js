var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');

gulp.task('app', function() {
	del([
		'dist/app.js'
    ]);
	return gulp.src([
		'src/js/defs/default.js',
		'src/js/defs/character.js',
		'src/js/defs/classes.js',
		'src/js/defs/equipment.js',
		'src/js/defs/factions.js',
		'src/js/defs/places.js',
		'src/js/core/character.js',
		'src/js/core/core.js',
		'src/js/init.js'
  	])
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('css', function() {
	del([
		'dist/app.css'
    ]);
	return gulp.src([
	  	'src/css/main.css',
		'src/css/window.css'
  	])
    .pipe(concat('app.css'))
    .pipe(gulp.dest('dist/'))
});

gulp.task('watch', function () {
	gulp.watch("src/**/*.js", gulp.parallel('app'));
	gulp.watch("src/**/*.css", gulp.parallel('css'));
});

gulp.task('build', gulp.parallel('css', 'app'));

gulp.task('default', gulp.parallel('watch', 'build'));
