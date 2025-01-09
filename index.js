const http = require("http");

http
  .createServer((req, res) => {
    req.write("Hello");
    res.end();
  })
  .listen(8000);
