const router = require('express').Router()
let fs = require('fs')
const Sequelize = require('sequelize')
const Op = Sequelize.Op;
const { User, Post, Comment, Friend} = require('../models')

// Find all posts from a user that is your friend
// Find all posts - Done (Tim)
router.get('/posts/friendrecentposts/:userUuid', (req, res) => {

    // Find all users where userUuid equal to uuid
  User.findAll({ where: { uuid: req.params.userUuid }, include: [{model : User, as : 'friend', attributes : ['firstName','lastName','age','gender','email','uuid']}] })
  .then(async (data) =>
  {
    // Turn data into an array 
      data = await JSON.parse(JSON.stringify(data[0]))
        
    // Now data is an array, we can loop through and filter out an object that we want 
      data = data.friend.map(val => {return  val.uuid })
      console.log(data)
        // res.json(data)
      Post.findAll({ where: { userUUid : {[Op.in] : data }} })
      .then( async recentPost => 
        {
            let tempList = []

            
            recentPost = await JSON.parse(JSON.stringify(recentPost))

            recentPost = recentPost.sort((a, b) => {return b - a} )
            console.log( recentPost)
            // for(let i = 0; i < recentPost.length; i++)
            // {
            //     console.log(tempList.length > 0)
            //     {
            //         tempList
            //     }
            // }
            // recentPost = recentPost.map
            // console.log(recentPost)
            res.json(recentPost)
        })
        .catch(err => console.error(err))
     // Return data back to user
    //   res.json(data)
   
  })
  .catch(err=> console.error(err));
  
})

// Find all posts - Done (Tim)
router.get('/posts/findall/:userUuid', (req, res) => {

    User.findOne({ where : {uuid : req.params.userUuid }})
    .then(()=> 
    {
        Post.findAll({include : [Comment]})
    .then(data => res.json(data))
    .catch(err => console.error(err))
    })
    .catch(err => console.log(404))
  
})

// Get a post - Done (Tim)
router.get('/posts/getpost/:postId/:userUuid', (req, res) => {
    User.findOne({ where : {uuid : req.params.userUuid }})
    .then(()=> 
    {
        Post.findOne({ where : {id : req.params.postId}, include : [Comment] })
        // User.findOne({ where : {}})
        .then(data => res.json(data))
        .catch(err => console.error(404))
    })
    .catch(err => console.log(404))
})

// Add a Post - - Inprogress (Working on getting the image work)
router.post('/posts/addpost', (req, res) =>{
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

// Update Post info - Inprogress (Working on getting the image work)
router.put('/posts/update/:userUuid/:postId', (req,res) =>
{
    Post.update(req.body, { where: { id : req.params.postId }})
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

// Delete a Post - Done (Tim)
router.delete('/posts/delete/:userUuid/:postId', (req,res) => {
    Post.destroy({where : {id : req.params.postId , userUuid: req.params.userUuid}})
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

module.exports = router