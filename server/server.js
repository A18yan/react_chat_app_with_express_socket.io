const express = require("express");

const app = express();
const mongoose = require("mongoose");
// express parser 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

app.listen(3000);
