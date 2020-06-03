const router = require('express').Router()
const { User, Post, Comment } = require('../models')

// Find all users
router.get('/users', (req, res) => {
    User.findAll()
    .then(data => res.json(data))
    .catch(err => console.error(err))
})

// User Login
router.get('/users/:username/:password', (req, res) => {
    User.findOne({ where : {username: req.params.username, password : req.params.password }})
    .then(data => res.json(data.dataValues.uuid))
    .catch(err => console.error(err))
})

// Gets posts from user
router.get('/users/:userid', (req, res) => {
    Post.findAll({where : {userUuid : req.params.userid},include : [ Comment ]})
})

// Add a user
router.post('/users', (req, res) =>{
    console.log("Here")
    User.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// Update user info
router.put('/users/:id', (req,res) =>
{
    User.update(req.body, { where: {id : req.params.id }})
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// Delete a user
router.delete('/users/:id', (req,res) => {
    User.update({activated: 1}, {where : {id : req.params.id}})
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router