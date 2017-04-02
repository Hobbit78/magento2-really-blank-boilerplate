//==================================
// Required
//==================================
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	plumber = require('gulp-plumber'),
	autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	clean = require('gulp-clean');;

// app/design/frontend/Blank/default

var path = {
	theme: 'app/design/frontend/Blank/default/',
	pub: 'pub/static/frontend/Blank/default/en_US/'
}
//==================================
// Scripts Tasks
//==================================
gulp.task('scripts', function(){
	gulp.src(['app/design/frontend/Blank/default/**/*.js', '!app/design/frontend/Blank/default/**/*.min.js'])
		.pipe(reload({stream:true}));
});

//==================================
// Sass Task
//==================================

// Local sass task
gulp.task('sass', function(){
	gulp.src(path.theme + 'styles/app.sass')
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
		.pipe(autoprefixer('last 2 versions'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.pub + '/css/'))
		.pipe(reload({stream:true}));
});

// Production sass task
gulp.task('sass-production', function(){
	gulp.src(path.theme + 'styles/app.sass')
		.pipe(plumber())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer('last 2 versions'))
		.pipe(gulp.dest(path.pub + 'css/'))
});

//==================================
// HTML Task
//==================================
gulp.task('files', function(){
	gulp.src(path.theme + '**/*.html')
		.pipe(reload({stream:true}));
});

//==================================
// Browser-Sync Task
//==================================
gulp.task('browser-sync', function(){
	browserSync.init({
		browser: ["google chrome"],
		// Set path to your local server
		proxy: "magento2-demo.dev"
	});
});


//==================================
// Watch Tasks
//==================================
gulp.task('watch', function(){
	gulp.watch(path.theme + '**/*.js', ['scripts']);
	gulp.watch(path.theme + '**/*.scss', ['sass']);
	gulp.watch(path.theme + '**/*.sass', ['sass']);
	gulp.watch(path.theme + '**/*.html', ['files']);
});

//==================================
// Task Runner
//==================================
// Set your local task
gulp.task('default', ['browser-sync', 'watch', 'sass', 'scripts', 'files']);

// Set dev task (run: gulp dev)
// Still have sourcemaps available
gulp.task('dev', ['sass', 'scripts']);

// Set production task (run: gulp production)
// Still have sourcemaps available
gulp.task('production', ['sass-production', 'scripts']);
