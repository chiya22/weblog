const config = require("../config.js");
const gulp = require("gulp");
const del = require("del");
const sass = require("gulp-sass");

gulp.task("compile-sass.clean", (done) => {
  del("./stylesheets/**/*", { cwd: config.path.output });
  done();
});

gulp.task("compile-sass", gulp.series("compile-sass.clean", (done) => {
  gulp.src("./stylesheets/**/*.scss", { cwd: config.path.input })
    .pipe(sass(config.sass))
    .pipe(gulp.dest("./stylesheets", { cwd: config.path.output }));
  done();
}));
