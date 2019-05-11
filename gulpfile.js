var gulp = require('gulp');
var concat = require('gulp-concat');
var del = require('del');

gulp.task('app', function() {
	del([
		'dist/app.js'
    ]);
	return gulp.src([
		// Nothing goes in front of this.
		'src/js/defs/default.js',

		'src/js/defs/character.js',
		'src/js/defs/classes.js',
		'src/js/defs/equipment.js',
		'src/js/defs/factions.js',
		'src/js/defs/places.js',

		'src/js/defs/items/armor/common.js',
		'src/js/defs/items/armor/uncommon.js',
		'src/js/defs/items/armor/rare.js',
		'src/js/defs/items/armor/legendary.js',
		'src/js/defs/items/armor/unique.js',
		'src/js/defs/items/armor/set.js',

		'src/js/defs/items/weapon/common.js',
		'src/js/defs/items/weapon/uncommon.js',
		'src/js/defs/items/weapon/rare.js',
		'src/js/defs/items/weapon/legendary.js',
		'src/js/defs/items/weapon/unique.js',
		'src/js/defs/items/weapon/set.js',

		'src/js/defs/items/others/common.js',
		'src/js/defs/items/others/uncommon.js',
		'src/js/defs/items/others/rare.js',
		'src/js/defs/items/others/legendary.js',
		'src/js/defs/items/others/unique.js',
		'src/js/defs/items/others/set.js',

		'src/js/helpers/game.js',
		'src/js/helpers/ui.js',

		'src/js/core/item.js',
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
		'src/css/reset.css',
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
