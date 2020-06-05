const { join } = require("path");
const router = require("express").Router();


// NEEDS TO BE DELETED
router.get("/profile", (req, res) => {
   res.sendFile(join(__dirname, "../public/profile.html"));

});

module.exports = router;
