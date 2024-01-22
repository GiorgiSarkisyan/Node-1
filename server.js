const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let filePath = "";

  if (req.url === "/") {
    filePath = "index.html";
  } else if (req.url === "/api") {
    filePath = "data.json";
  } else {
    filePath = "404.html";
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    } else {
      const contentType = req.url === "/api" ? "application/json" : "text/html";
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
