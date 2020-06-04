const { join } = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.sendFile(join(__dirname, "../public/index.html"));
});

router.get("/profile", (req, res) => {
  if (true) {
    res.sendFile(join(__dirname, "../public/profile.html"));
  } else{
    res.sendFile(join(__dirname, "../public/index.html"));
  }
});

module.exports = router;
