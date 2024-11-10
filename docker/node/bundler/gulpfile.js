import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);
const destPath = 'public/assets';

gulp.task('sass', function() {
    return gulp.src('resources/sass/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(`${destPath}/css`));
});

gulp.task('css', function() {
    return gulp.src('resources/css/**/*.css')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(`${destPath}/css`));
});

gulp.task('js', function() {
    return gulp.src('resources/js/**/*.js')
        .pipe(gulp.dest(`${destPath}/js`));
});

gulp.task('watch', function() {
    gulp.watch('resources/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('resources/css/**/*.css', gulp.series('css'));
    gulp.watch('resources/js/**/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series('sass', 'css', 'js', 'watch'));
