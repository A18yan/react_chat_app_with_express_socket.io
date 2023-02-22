const express = require("express");
const router = express.Router();
const message_controller = require("../controller/message.controller");
const upload = require("../middleware/multer/multer");

router.post("/send", upload.array("image", 3), message_controller.add_message);
module.exports = router;
