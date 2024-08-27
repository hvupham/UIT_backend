const express = require("express");
const likeController = require("../controllers/likeController");
const router = express.Router();

router.post("/post/like", likeController.like);
// router.post("/post/unlike", likeController.unlike);

module.exports = router;
