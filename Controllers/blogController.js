const Blog = require('../Models/blog')

const add_blog_get = (req, res) => {
	const blog = new Blog({
		title: 'new new blog',
		snippet: 'about new new blog',
		body: 'more about my blog'
	})

	blog.save()
		.then((result) => {
			res.send(result)
		})
		.catch((err) => console.log(err))
}

const all_blogs_get = (req, res) => {
	Blog.find()
		.then((result) => {
			res.send(result)
		})
		.catch((err) => {
			console.log(err)
		})
}

const single_blog_get = (req, res) => {
	Blog.find({_id:'627abd69bcea4d1fc7df0c43'})
		.then((result) => {
			res.send(result)
		})
		.catch((err) => {
			console.log(err)
		})
}

module.exports = {
	add_blog_get,
	all_blogs_get,
	single_blog_get
}