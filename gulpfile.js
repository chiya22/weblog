const config = require("./gulp/config.js");
const gulp = require("gulp");
const load = require("require-dir");
let development, production;

load("./gulp/tasks", { recurse: true });

development = [
  "copy-third_party",
  "copy-images",
  "copy-javascripts",
  "compile-sass"
];

production = [
  "copy-third_party",
  "copy-images",
  "minify-javascripts",
  "compile-sass"
];

gulp.task("default", gulp.series(config.env.IS_DEVELOPMENT ? development : production), (done) => {
  // gulp.task("default", gulp.series(config.env.IS_DEVELOPMENT? development: production), (done) => {
  console.log(process.env.NODE_ENV);
  done();
});
