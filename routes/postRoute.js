const express = require('express');
const postController = require('../controllers/postController')
const router = express.Router();

router.post('/post', postController.create)
router.delete('/post/delete/:id', postController.delete)
router.get('/post/getAll', postController.getAll)

module.exports = router;
