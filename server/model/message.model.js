const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const messageSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
    sender: {
      type: String,
      required: false,
    },
    receiver: {
      type: String,
      required: true,
    },
    image: [
      {
        type: String,
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Message", messageSchema);
