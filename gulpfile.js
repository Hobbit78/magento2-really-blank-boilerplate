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


// Set your base paths here.
var path = {
	theme: 'app/design/frontend/Blank/default/',
	pub: 'pub/static/frontend/Blank/default/en_US/'
}

//==================================
// Scripts Tasks
//==================================
gulp.task('scripts', function(){
	gulp.src([path.theme + '**/*.js', '!' + path.theme + '**/*.min.js'])
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
		.pipe(gulp.dest(path.theme + 'web/css/'))
});

//==================================
// HTML Task
//==================================
gulp.task('files', function(){
	gulp.src([path.theme + '**/*.html', path.theme + '**/*.phtml'])
		.pipe(reload({stream:true}));
});

//==================================
// Browser-Sync Task
//==================================
gulp.task('browser-sync', function(){
	browserSync.init({
		browser: ["google chrome"],
		// Set path to your local server
		// This is only needed for local development
		proxy: "magento2-demo.dev"
	});
});

//==================================
// Clean Task
//==================================
gulp.task('clean', function () {
	return gulp.src(path.pub + 'css/*', {read: false})
		.pipe(clean());
});

//==================================
// Watch Tasks
//==================================
gulp.task('watch', function(){
	gulp.watch(path.theme + '**/*.js', ['scripts']);
	gulp.watch([
		path.theme + '**/*.scss',
		path.theme + '**/*.sass'
	], ['sass']);
	gulp.watch([
		path.theme + '**/*.phtml',
		path.theme + '**/*.html'
	], ['files']);
});

//==================================
// Task Runner
//==================================
// Set your local task
gulp.task('dev', ['browser-sync', 'watch', 'sass', 'scripts', 'files']);

// Set production task (run: gulp production)
// Still have sourcemaps available
gulp.task('production', ['sass-production', 'scripts']);

// Clean css (run: gulp clean)
gulp.task('clean', ['clean']);