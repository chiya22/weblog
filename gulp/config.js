let NODE_ENV = (process.env.NODE_ENV || "").trim() || "development";
let IS_DEVELOPMENT = NODE_ENV === "development";

module.exports = {
  env: {
    NODE_ENV,
    IS_DEVELOPMENT
  },
  path: {
    root: "./",
    log: "./log",
    node_module: "./node_modules",
    input: "./public/source",
    output: `./public/${NODE_ENV}`
  },
  sass: {
    outputStyle: IS_DEVELOPMENT ? "expanded" : "compressed"
  },
  uglify: {
  }
};