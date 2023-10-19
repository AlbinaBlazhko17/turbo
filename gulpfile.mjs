import gulp from 'gulp';
import image from 'gulp-image';
import cleanCSS from 'gulp-clean-css';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import browsersync from 'browser-sync';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import rename from 'gulp-rename';
const sass = gulpSass(dartSass);

const dist = './dist';

gulp.task('copy-html', () => {
	return gulp
		.src('./src/index.html')
		.pipe(gulp.dest(dist))
		.pipe(browsersync.stream());
});

gulp.task('copy-assets', () => {
	gulp.src('./src/assets/icons/*.*').pipe(gulp.dest(dist + '/assets/icons'));

	return gulp
		.src('./src/assets/img/*.*')
		.pipe(image())
		.pipe(gulp.dest(dist + '/assets/img'))
		.pipe(browsersync.stream());
});

gulp.task('build-sass', () => {
	return gulp
		.src('./src/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([autoprefixer()]))
		.pipe(gulp.dest('./src/css'))
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

gulp.task('build-js', () => {
	return gulp
		.src('./src/js/script.js')
		.pipe(gulp.dest(dist + '/js'))
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
	gulp.watch('./src/assets/img/*.*', gulp.parallel('copy-assets'));
	gulp.watch('./src/assets/icons/*.*', gulp.parallel('copy-assets'));
	gulp.watch('./src/**/*.*', gulp.parallel('copy-assets'));
	gulp.watch('./src/scss/**/*.scss', gulp.parallel('build-sass'));
	gulp.watch('./src/css/styles.css', gulp.parallel('build-css-min'));
	gulp.watch('./src/js/*.js', gulp.parallel('build-js'));
});

gulp.task(
	'build',
	gulp.parallel(
		'copy-html',
		'copy-assets',
		'build-sass',
		'build-css-min',
		'build-js',
	),
);

gulp.task('prod', () => {
	gulp.src('./src/index.html').pipe(gulp.dest(dist));
	gulp.src('./src/assets/*.png').pipe(gulp.dest(dist + '/assets'));
	gulp.src('./src/assets/*.*').pipe(gulp.dest(dist + '/assets'));
	gulp.src('./src/js/scipt.js')
		.pipe(
			webpack({
				mode: 'production',
				output: {
					filename: 'script.js',
				},
				module: {
					rules: [
						{
							test: /\.m?js$/,
							exclude: /(node_modules|bower_components)/,
							use: {
								loader: 'babel-loader',
								options: {
									presets: [
										[
											'@babel/preset-env',
											{
												debug: false,
												corejs: 3,
												useBuiltIns: 'usage',
											},
										],
									],
								},
							},
						},
					],
				},
			}),
		)
		.pipe(gulp.dest(dist + '/js'));

	return gulp
		.src('./src/scss/style.scss')
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./src/css'));
});

gulp.task('default', gulp.parallel('watch', 'build'));
