import browserSync from "browser-sync";
import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
const sass = gulpSass(dartSass);
const browser = browserSync.create();

export const style = () => {
  return gulp
    .src("./src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"))
    .pipe(browser.stream());
};

export const watch = () => {
  browser.init({
    server: {
      baseDir: ["./", "./src"],
    },
  });
  gulp.watch("./src/**/*.scss", style);
  gulp.watch("./src/*.html").on("change", browser.reload);
  gulp.watch("./src/*.js").on("change", browser.reload);
};

export const dev = gulp.parallel(style, watch);
