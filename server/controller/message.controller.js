// import the message model
const Message = require("../model/message.model");
require("dotenv").config();

// response -> a function to return a response
const response = (res, server_status, message, status) => {
  return res.status(server_status).json({ message, status });
};
// response_with_data -> a function to return a token
const response_with_data = (res, server_status, message, status, data) => {
  return res.status(server_status).json({ message, status, token: data });
};

// make a function that adds the message send from frontend to the database, also export the function
module.exports.add_message = (req, res) => {
    console.log(req.body);
    console.log(req.files);
    res.json({ ...req.files });
  // const { message, sender, receiver } = req.body;
  // if (!message) response(res, 200, "message is required", 400);
  // if (!sender) response(res, 200, "sender is required", 400);
  // if (!receiver) response(res, 200, "receiver is required", 400);
  // for (var i = 0; i < req.files.length; i++) {
  //   console.log(req.files[i].filename);
  //   var imagePath = req.files[i].path;

  //   notes = await Notes.create({
  //     title,
  //     subject,
  //     image: `http://localhost:3000/${imagePath}`,
  //     description,
  //     userId: req.userId,
  //   });
  // }

  // res.status(201).json({
  //   status: "success",
  //   message: "Notes Created",
  //   data: notes,
  // });
  [
    {
      fieldname: "image",
      originalname: "4f503844d9a44b0350c25eeefae028d3.jpg",
      encoding: "7bit",
      mimetype: "image/jpeg",
      destination: "uploads/",
      filename: "4f503844d9a44b0350c25eeefae028d3.jpg",
      path: "uploads\\4f503844d9a44b0350c25eeefae028d3.jpg",
      size: 389590,
    },
  ];

  
};