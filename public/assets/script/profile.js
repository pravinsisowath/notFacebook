const logOut = () => {
  console.log("hello");
  var date = new Date();
  var utcDate = new Date(date.toUTCString());
  utcDate.setHours(utcDate.getHours());
  var usDate = new Date(utcDate);
  document.cookie = `name=''; expires = ${usDate.toUTCString()}`;
  window.location.replace("/");
};

if (!document.cookie.split("=")[1]) {
  console.log("Nothing");
} else {
  console.log("Something");
  axios
    .get(`/api/users/info/${document.cookie.split("=")[1]}`)
    .then(({ data }) => {
      console.log(data[0]);

      document.getElementById("loggedIn").innerHTML = `
              Logged in as ${data[0].firstName} ${data[0].lastName}
              <button id='logOut' onclick='logOut()'>Log Out</button>
              `;
      recentPost(data.UserPost);
    })
    .catch((err) => console.log(err));
}

function recentPost(data) {}
