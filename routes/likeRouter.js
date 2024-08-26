const express = require("express");
const likeController = require("../controllers/likeController");
const router = express.Router();

router.post("/like", likeController.like);
router.post("/unlike", likeController.unlike);

module.exports = router;
