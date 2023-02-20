// import the message model
const Message = require("../model/message.model");

// response -> a function to return a response
const response = (res, server_status, message, status) => {
    return res.status(server_status).json({ message, status });
}
// response_with_data -> a function to return a token
const response_with_data = (res, server_status, message, status, data) => {
    return res.status(server_status).json({ message, status, token:data });
}

// make a function that adds the message send from frontend to the database, also export the function
module.exports.add_message = (req, res) => {
    console.log(req.body);
    console.log(req.file);
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
}