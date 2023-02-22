const express = require("express");
const router = express.Router();
const message_controller = require("../controller/message.controller");
const upload = require("../middleware/multer/multer");
const {
  authenticate,
} = require("../middleware/check-user/check-user.middleware");

router.post(
  "/send",
  authenticate,
  upload.array("image", 3),
  message_controller.add_message
);
module.exports = router;
