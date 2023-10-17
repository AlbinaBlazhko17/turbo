import gulp from 'gulp';
import webpack from 'webpack-stream';
import image from 'gulp-image';
import cleanCSS from 'gulp-clean-css';
import browsersync from 'browser-sync';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import rename from 'gulp-rename';

const dist = './dist';

gulp.task('copy-html', () => {
	return gulp
		.src('./src/index.html')
		.pipe(gulp.dest(dist))
		.pipe(browsersync.stream());
});

gulp.task('copy-assets', () => {
	gulp.src('./src/assets/*.*').pipe(gulp.dest(dist + '/assets'));

	return gulp
		.src('./src/assets/*.*')
		.pipe(image())
		.pipe(gulp.dest(dist + '/assets/'))
		.pipe(browsersync.stream());
});

gulp.task('build-css-min', () => {
	return gulp
		.src('./src/css/styles.css')
		.pipe(postcss(autoprefixer))
		.pipe(cleanCSS())
		.pipe(rename({ suffix: '.min', prefix: '' }))
		.pipe(gulp.dest(dist + '/css'))
		.pipe(browsersync.stream());
});

gulp.task('watch', () => {
	browsersync.init({
		server: './dist',
		browser: 'google chrome',
		port: 3001,
		notify: true,
	});

	gulp.watch('./src/index.html', gulp.parallel('copy-html'));
	gulp.watch('./src/assets/*.png', gulp.parallel('copy-assets'));
	gulp.watch('./src/**/*.*', gulp.parallel('copy-assets'));

	gulp.watch('./src/styles/styles.css', gulp.parallel('build-css-min'));
});

gulp.task('build', gulp.parallel('copy-html', 'copy-assets', 'build-css-min'));

gulp.task('prod', () => {
	gulp.src('./src/index.html').pipe(gulp.dest(dist));
	gulp.src('./src/assets/*.png').pipe(gulp.dest(dist + '/assets/img'));
	gulp.src('./src/assets/*.*').pipe(gulp.dest(dist + '/assets/icons'));

	return gulp
		.src('./src/scss/style.scss')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./src/styles'));
});

gulp.task('default', gulp.parallel('watch', 'build'));
