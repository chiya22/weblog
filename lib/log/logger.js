const log4js = require("log4js");
const config = require("../../config/log4js.config");
const levels = require("log4js/lib/levels.js").levels;

let console, system, application, access;

log4js.configure(config);

console = log4js.getLogger();
system = log4js.getLogger("system");

const ApplicaionLogger = function () {
  this.logger = log4js.getLogger("application");
};
let proto = ApplicaionLogger.prototype;
for (var level of levels) {
  level = level.levelStr.toLowerCase();
  proto[level] = (function (level) {
    return function (key, message) {
      let logger = this.logger;
      logger.addContext("key", key);
      logger[level](message);
    };
  })(level);
}
application = new ApplicaionLogger();

access = log4js.getLogger("access");

module.exports = {
  console,
  system,
  application,
  access
};
