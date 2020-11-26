const http = require("http");
const server = http.createServer();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

server.on("request", (req, res) => {
  if (req.method === "POST" && req.url == "/echo") {
    let body = [];

    req
      .on("data", (chunk) => {
        body.push(chunk);
      })
      .on("end", () => {
        res.writeHead(200, { "Content-Type": "text/plain" });
        body = Buffer.concat(body).toString();
        const date = new Date(body);
        let dayOfWeek = days[date.getDay()];
        res.end(dayOfWeek);
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(8001);
console.log("server on http://localhost:8001");
