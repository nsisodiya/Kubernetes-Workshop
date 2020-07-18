const express = require("express");
const app = express();
var os = require("os");
var hostname = os.hostname();

app.get("/", (req, res) => {
  console.log(`Hello world received a request on Hostname ${hostname}`);
  const target = process.env.TARGET || "World";
  res.send(`Hello ${target}! We received a request on Hostname ${hostname}\n`);
});

function factorial(n) {
  var total = 1;
  for (let index = 1; index <= n; index++) {
    total = total * index;
  }
  return total;
}

app.get("/factorial/:n", (req, res) => {
  const n = parseInt(req.params.n); // 'user'
  res.send(`factorial(${n}) = ${factorial(n)}\n`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Hello world listening on port", port);
});
