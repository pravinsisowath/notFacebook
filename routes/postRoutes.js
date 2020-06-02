const router = require('express').Router()
let fs = require('fs')
const { User, Post } = require('../models')

// Find all posts
router.get('/posts', (req, res) => {
    Post.findAll()
    .then(data => res.json(data))
    .catch(err => console.error(err))
})

// Get a post
router.get('/posts/:id', (req, res) => {
    User.findOne({ where : {uuid: req.params.id}, include : [Post] })
    .then(data => res.json(data))
    .catch(err => console.error(err))
})

// Add a Post
router.post('/posts', (req, res) =>{
    // let temp = req.body
    // let url = req.body.image
    // console.log(req.body.image)
    // let imageData = fs.readFileSync(url)
    Post.create(req.body)
    .then((data) => {
        // console.log(data.image)
        // fs.writeFileSync(url,'utf8', data.image)
        res.sendStatus(200)})
    .catch(err => console.error(err))
})

// Update Post info
router.put('/posts/:id', (req,res) =>
{
    Post.update(req.body, { where: {id : req.params.id }})
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// Delete a Post
router.delete('/posts/:id', (req,res) => {
    Post.update({activated: 1}, {where : {id : req.params.id}})
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router