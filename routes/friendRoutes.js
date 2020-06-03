const router = require("express").Router();
const { User, Post, Comment, Friends } = require("../models");

// Add a friend
router.post("/friends", (req, res) => {
  Friends.create(req.body)
    .then((data) => {
      res.sendStatus(200);
    })
    .catch((err) => console.error(err));
});

// Delete a friend
router.delete("/friends/:id1/:id2", (req, res) => {
  Friends.destroy({
    where: {
      [Op.or]: [
        { user1id: req.params.id1, user2id: req.params.id2 },
        { user1id: req.params.id2, user2id: req.params.id1 },
      ],
    },
  })
    .then(() => res.sendStatus(200))
    .catch((err) => console.error(err));
});

module.exports = router;
