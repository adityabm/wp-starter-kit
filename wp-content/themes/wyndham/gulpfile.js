const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();
gulp.task("styles", function () {
  return gulp
    .src("assets/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/css"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});
gulp.task("scripts", function () {
  return gulp
    .src("assets/js/*.js")
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/js"))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
});
gulp.task("watch", function () {
  browserSync.init({
    proxy: "http://localhost:8080/",
  });
  gulp.watch("assets/scss/**/*.scss", gulp.series("styles"));
  gulp.watch("assets/js/*.js", gulp.series("scripts"));
  gulp.watch("**/*.php").on("change", browserSync.reload);
});
gulp.task("default", gulp.parallel("styles", "scripts", "watch"));
