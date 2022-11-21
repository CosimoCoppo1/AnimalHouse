const express = require('express')
const { createPost, deletePost, getPost, getPosts, updatePost } = require('../controllers/PostController.js') 
const router = express.Router()

router.post('/',createPost)
router.get('/:id', getPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.get('/', getPosts)

export default router