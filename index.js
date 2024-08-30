const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { readdirSync } = require("fs");
const connectDatabase = require("./utils/database");
const ws = require("ws");
const app = express();
require("dotenv").config();

connectDatabase();

app.use(bodyParser.json());
app.use(cors());

readdirSync("./routes").map((r) => {
  app.use("/api", require(`./routes/${r}`));
});
// Khởi tạo WebSocket server
// const server = http.createServer(app);
// initializeWebSocket(server);

// const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });
const wsServer = new ws.Server({ noServer: true });
wsServer.on('connection', socket => {
  socket.on('message', message => console.log(message));
});
const server = app.listen(3000);
server.on('upgrade', (request, socket, head) => {
  wsServer.handleUpgrade(request, socket, head, socket => {
    wsServer.emit('connection', socket, request);
  });
});