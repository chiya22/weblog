const config = require("../config.js");
const gulp = require("gulp");
const del = require("del");

gulp.task("copy-images.clean", (done) => {
  del("./images/**/*", { cwd: config.path.output });
  done();
});

gulp.task("copy-images", gulp.series("copy-images.clean", (done) => {
  gulp.src("./images/**/*", {cwd: config.path.input}).pipe(gulp.dest("./images", {cwd: config.path.output}));
  done();
}));
