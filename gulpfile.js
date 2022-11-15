import browserSync from "browser-sync";
import del from "del";
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

export const clean = (cb) => {
  del(["./dist"]);
  cb();
};

export const dest = (cb) => {
  gulp.src("./css/style.css").pipe(gulp.dest("./dist/css"));
  gulp.src("./src/index.js").pipe(gulp.dest("./dist/js"));
  gulp.src("./src/index.html").pipe(gulp.dest("./dist/html"));
  gulp.src("./img/*").pipe(gulp.dest("./dist/img"));
  gulp.src("./public/*").pipe(gulp.dest("./dist/public"));
  cb();
};

export const dev = gulp.parallel(style, watch);
export const build = gulp.series(clean, dest);
