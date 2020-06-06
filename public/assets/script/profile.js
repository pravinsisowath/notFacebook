const logOut = () => {
  console.log("hello");
  var date = new Date();
  var utcDate = new Date(date.toUTCString());
  utcDate.setHours(utcDate.getHours());
  var usDate = new Date(utcDate);
  document.cookie = `name=''; expires = ${usDate.toUTCString()}`;
  window.location.replace("/");
};

//show all users who are currently friends with me- hoyeon
const renderMyFriends = () => {
  axios
    .get(`/api/users/info/${document.cookie.split("=")[1]}`)
    .then(({ data }) => {
      let friendData = data[0].friend;
      console.log(friendData);
      document.getElementById("friendList").innerHTML = "";
      for (let i = 0; i < friendData.length; i++) {
        let friendElem = document.createElement("div");
        friendElem.innerHTML = `<button id='myfriend'> ${friendData[i].firstName} ${friendData[i].lastName}</button>`;
        document.getElementById("friendList").append(friendElem);
      }
    })
    .catch((err) => console.log(err));
};

document.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.id === "add") {
    axios
      .post("api/friend/addfriend", {
        userUuid: document.cookie.split("=")[1],
        friendUuid: event.target.dataset.item,
      })
      .then(() => {
        renderFriendSuggestion();
        renderMyFriends();
      })
      .catch((err) => console.error(err));
  }
});

//show a list of other users who are not friends yet with me - hoyeon
const renderFriendSuggestion = () => {
  if (!document.cookie.split("=")[1]) {
    console.log("Nothing");
  } else {
    console.log("connected");
    axios
      .get(`/api/friend/findfriend/${document.cookie.split("=")[1]}`)
      .then(({ data }) => {
        document.getElementById("friendSuggest").innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          console.log(data[i]);
          let notfriendElem = document.createElement("div");
          notfriendElem.innerHTML = `<button id='add' data-item="${data[i].uuid}" > + ${data[i].firstName} ${data[i].lastName}</button>`;
          document.getElementById("friendSuggest").append(notfriendElem);
        }
      })
      .catch((err) => console.log(err));
  }
  renderMyFriends();
};

const loggedInStatus = () => {
  if (!document.cookie.split("=")[1]) {
    console.log("Nothing");
  } else {
    console.log("Something");
    axios
      .get(`/api/users/info/${document.cookie.split("=")[1]}`)
      .then(({ data }) => {
        console.log(data[0]);
        //Suggestion(hoyeon): how about using an username instaed of first & lastname?
        document.getElementById("loggedIn").innerHTML = `
              Logged in as ${data[0].firstName} ${data[0].lastName}
              <button id='logOut' onclick='logOut()'>Log Out</button>
              `;
        recentPost(data.UserPost);
      })
      .catch((err) => console.log(err));
  }
};

function init() {
  loggedInStatus();
  renderFriendSuggestion();
}

init();
