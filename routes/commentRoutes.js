const { join } = require("path");
const router = require("express").Router();
const { Post, User, Comment } = require("../models");

// Get a post
router.get("/comments/:userid/:postid", (req, res) => {
  Comment.findOne({ where: { uuid: req.params.id }, include: [Post] })
    .then((data) => res.json(data))
    .catch((err) => console.error(err));
});

// Add a Post
router.post("/comments", (req, res) => {
  Comment.create(req.body)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => console.error(err));
});

// Update Post info
router.put("/comments/:id", (req, res) => {
  Comment.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});

// Delete a Comment
router.delete("/comments/:id", (req, res) => {
  Comment.update({ activated: 1 }, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});

module.exports = router;
