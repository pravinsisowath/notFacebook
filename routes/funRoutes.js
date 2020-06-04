const { join } = require("path");
const router = require("express").Router();

router.get("/", (req, res) => {
  // if cookie exists with uuid send user to profile IF NO COOKIE 
   if (false) {
     res.sendFile(join(__dirname, "../public/profile.html"));
   } else {
     res.sendFile(join(__dirname, "../public/index.html"));
   }
});

// NEEDS TO BE DELETED
router.get("/profile", (req, res) => {
 res.sendFile(join(__dirname, "../public/profile.html"))
  
});

module.exports = router;
