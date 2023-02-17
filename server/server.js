const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
// express parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// server -> http
const server = http.createServer(app);
// cors setup -> allows react app to communicate with server
app.use(cors());
// socket io -> also setups cors
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
// mongoose connection
mongoose.connect(
  "mongodb://localhost/test",
  () => {
    console.log("connected to db");
  },
  (err) => {
    console.log("error connecting to db");
  }
);
mongoose.set("strictQuery", false);
app.get("/", function (req, res) {
  res.send("Hello World");
});

server.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
