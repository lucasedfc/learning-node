// %s => String
// %d => Number
// %j => JSON

// console.log("Un %s y %s", "dog", "cat");

// console.info("Hello world"); // alias console.log
// console.warn("Warning"); // alias console.error
// console.assert(41 === "41"); // Test
// console.trace("Hello"); // More Detail

const util = require("util");

const debuglog = util.debuglog("foo"); // NODE_DEBUG=foo

debuglog("Hello from foo");
