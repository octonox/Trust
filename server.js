var app = require("express")();
var http = require('http').createServer(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.render("index.ejs")
})
.get("/:param", function(req, res) {
  res.render(req.params.param + ".ejs")
});

io.on("connection", function(socket) {
  console.log("Client connected");

  socket.on("fetchRequest", function(msg) {
    console.log("Request: " + msg);
  });
});

http.listen(3000);
