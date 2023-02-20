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
// mongoose connection
mongoose.connect(
  "mongodb://localhost/chat_app",
  () => {
    console.log("connected to chat_app database");
  },
  () => {
    console.log("error connecting to db");
  }
);
mongoose.set("strictQuery", false);

// server -> http
const server = http.createServer(app);
// cors setup -> allows react app to communicate with server
const corsOption = {
  credentials: true,
  origin: "http://127.0.0.1:5173",
  "Access-Control-Allow-Origin": "*",
  preflightContinue: false,
};
app.use(cors(corsOption));
app.options("*", cors(corsOption));
// socket io -> also setups cors
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  console.log(`connected ${socket.id}`);
  socket.on('disconnect', () => {
    console.log('disconnected');
  });
  socket.on('send-message', (data) => {
    console.log(data);
    // io.emit('new-message', data);
  })
})
const user_router = require('./routes/user.routes');
app.use("/api/auth", user_router);
// server running point
server.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
