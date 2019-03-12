const config = require("../config.js");
const gulp = require("gulp");
const del = require("del");

gulp.task("copy-javascripts.clean", (done) => {
  del("./javascripts/**/*", { cwd: config.path.output });
  done();
});

gulp.task("copy-javascripts", gulp.series("copy-javascripts.clean", (done) => {
  gulp.src("./javascripts/**/*", {cwd: config.path.input}).pipe(gulp.dest("./javascripts", {cwd: config.path.output}));
  done();
}));
