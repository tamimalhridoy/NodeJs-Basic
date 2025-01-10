const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World 3rd");
});

app.listen(5000);
