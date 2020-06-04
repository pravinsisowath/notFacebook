const { join } = require("path");
const router = require("express").Router();
// if (!document.cookie.split("=")[1]) {
//   console.log("not signed in");
// } else {
//   axios
//     .get(`/api/users/${document.cookie.split("=")[1]}`)
//     .then(({ data }) => {
//       user = data;
//       document.getElementById("header").innerHTML = `
//             ${user.firstName} ${user.lastName}
//             `;
//     })
//     .catch((err) => console.log(err));
// }

router.get("/", (req, res) => {
  // if cookie exists with uuid send user to profile IF NO COOKIE 
   if (false) {
    //  console.log("not signed in");
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
