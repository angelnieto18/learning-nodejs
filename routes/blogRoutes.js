const express = require('express')
const router = express.Router()
const blogController = require('../Controllers/blogController')

router.get('/add-blog', blogController.add_blog_get)
router.get('/all-blogs', blogController.all_blogs_get)
router.get('/single-blog', blogController.single_blog_get)

module.exports = router