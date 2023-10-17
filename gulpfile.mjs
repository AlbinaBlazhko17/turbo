import gulp from 'gulp';
import webpack from 'webpack-stream';
import image from 'gulp-image';
import cleanCSS from 'gulp-clean-css';
import browsersync from 'browser-sync';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import rename from 'gulp-rename';

const dist = './';

gulp.task('copy-html', () => {
	return gulp
		.src('./index.html')
		.pipe(gulp.dest(dist))
		.pipe(browsersync.stream());
});

gulp.task('copy-assets', () => {
	gulp.src('./assets/**/*.*').pipe(gulp.dest(dist + '/assets/icons'));

	return gulp
		.src('./assets/**/*.png')
		.pipe(image())
		.pipe(gulp.dest(dist + '/assets/'))
		.pipe(browsersync.stream());
});

gulp.task('build-css-min', () => {
	return gulp
		.src('./styles/styles.css')
		.pipe(postcss(autoprefixer))
		.pipe(cleanCSS())
		.pipe(rename({ suffix: '.min', prefix: '' }))
		.pipe(gulp.dest(dist + '/css'))
		.pipe(browsersync.stream());
});

gulp.task('watch', () => {
	browsersync.init({
		server: './',
		browser: 'google chrome',
		port: 3001,
		notify: true,
	});

	gulp.watch('./src/index.html', gulp.parallel('copy-html'));
	gulp.watch('./src/assets/**/*.*', gulp.parallel('copy-assets'));
	gulp.watch('./src/**/*.*', gulp.parallel('copy-assets'));

	gulp.watch('./styles/styles.css', gulp.parallel('build-css-min'));
});

gulp.task('build', gulp.parallel('copy-html', 'copy-assets', 'build-css-min'));

gulp.task('prod', () => {
	gulp.src('./src/index.html').pipe(gulp.dest(dist));
	gulp.src('./src/assets/**/*.png').pipe(gulp.dest(dist + '/assets'));
	gulp.src('./src/assets/**/*.*').pipe(gulp.dest(dist + '/assets'));

	return gulp
		.src('./scss/style.scss')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./styles'));
});

gulp.task('default', gulp.parallel('watch', 'build'));
