const EventEmitter = require("events");

class Logger extends EventEmitter {
  execute(cb) {
    console.log("Before");
    this.emit("start");
    cb();
    this.emit("finish");
    console.log("after");
  }
}

const logger = new Logger();

logger.on("start", () => console.log("starting"));

logger.on("finish", () => console.log("Finishing"));
logger.on("finish", () => console.log("Its DOne"));

logger.execute(() => console.log("Hello world"));
