const logOut = () => {
  // console.log('hello')
  var date = new Date();
  var utcDate = new Date(date.toUTCString());
  utcDate.setHours(utcDate.getHours());
  var usDate = new Date(utcDate);
  document.cookie = `name=''; expires = ${usDate.toUTCString()}`; 
  window.location.replace("/");
  }
if (!document.cookie.split("=")[1]) {
  window.location.replace("/");
} else {
  axios
    .get(`/api/users/${document.cookie.split("=")[1]}`)
    .then(({ data }) => {
      user = data;
      document.getElementById("loggedIn").innerHTML = `
            Logged in as ${user.firstName} ${user.lastName}
            <button id='logOut' onclick='logOut()'>Log Out</button>
            `;
    })
    .catch((err) => console.log(err));
}

