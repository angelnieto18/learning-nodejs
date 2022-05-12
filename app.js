const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

const app = express()

const dbURI = "mongodb+srv://angel:30474952@nodeapp.pz7sb.mongodb.net/node-app?retryWrites=true&w=majority"
mongoose.connect(dbURI)
	.then((result) => {
		app.listen(3000)
		console.log('conexion exitosa')
	})
	.catch((err) => console.log(err))



app.set('view engine', 'ejs')

app.use(helmet())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

app.use('/blogs', blogRoutes)

app.get('/', (req, res) => {
	res.render('index', {title: 'Homepage'})
})

app.get('/skills', (req, res) => {
	const skills = [
		{title: 'HTML5'}, 
		{title: 'CSS3'}, 
		{title: 'JavaScript'}, 
		{title: 'Node js'}, 
		{title: 'PHP'}
		]
	res.render('skills', {title: 'Skills', skills})
})

app.get('/projects', (req, res) => {
	res.render('projects', {title: 'Projects'})
})

app.get('/contact', (req, res) => {
	res.render('contact', {title: 'Contact'})
})

app.use((req, res) => {
	res.status(404).render('error')
})