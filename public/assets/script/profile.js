<<<<<<< HEAD
const socket = io();

socket.on("newUserSignUp", (message) => {
  console.log(message);
});

// const moment = moment()
console.log("This is TIME");
console.log(moment().format("l LT"));
=======
>>>>>>> 72969f329781972833f05512d139f94d756893e7

const logOut = () => {
  console.log("hello");
  var date = new Date();

  var utcDate = new Date(date.toUTCString());
  utcDate.setHours(utcDate.getHours());
  var usDate = new Date(utcDate);
  document.cookie = `name=''; expires = ${usDate.toUTCString()}`;
  window.location.replace("/");
};

function loggedInStatus() {
  if (!document.cookie.split("=")[1]) {
<<<<<<< HEAD
    console.log("Nothing");
  } else {
    console.log("Something");
    axios
      .get(`/api/users/info/${document.cookie.split("=")[1]}`)
      .then(({ data }) => {
        generateRecentPost();
        console.log(data.UserPost);
        userPost(
          data.UserPost,
          data.UserInfo.FirstName,
          data.UserInfo.LastName
        );
=======
  } else {
    axios
      .get(`/api/users/info/${document.cookie.split("=")[1]}`)
      .then(({ data }) => {
        
          generateRecentPost()
          userPost(data.UserPost,data.UserInfo.FirstName,data.UserInfo.LastName)
>>>>>>> 72969f329781972833f05512d139f94d756893e7
        document.getElementById("loggedIn").innerHTML = `
              Logged in as ${data.UserInfo.FirstName} ${data.UserInfo.LastName}
              <button id='logOut' onclick='logOut()'>Log Out</button>
              `;
      })
      .catch((err) => console.log(err));
  }
}

<<<<<<< HEAD
function userPost(userPost, firstName, lastName) {
  console.log(userPost);
  userPost.forEach((post) => {
    // console.log("In userpost")
    // console.log(post)
    let comments = post.comments.reduce((allComments, comments) => {
      return (allComments += ` <p>Name: <span>${comments.title}</span></p>`);

      // console.log(comments)
    }, "");

    $(".main").prepend(
      `  
            <div class="myPost">
=======
function userPost(userPost,firstName,lastName)
{ 
    userPost.forEach(post => { 
        // console.log("In userpost")
        // console.log(post)
        let comments = post.comments.reduce((allComments, comments) =>
        {
            return allComments +=  
           ` <p>Name: <span>${comments.title}</span></p>`
            
            // console.log(comments)
        }
        ,'')

        $('.main').prepend(
            `  
            <div class="myPost" data-id="${post.id}">
>>>>>>> 72969f329781972833f05512d139f94d756893e7
            <h3 class ="username"> ${firstName} ${lastName} : <span class ="postbody">${post.body}</span></h3>
            
            <div class="image"> 
            <img src="${post.image}" alt="" class="postImage">
               </div>
            <hr />
            <div class="commentArea">
            ${comments}
            </div>
            <form  method="POST" data-postId="${post.id}" class="commentForm">
              <input type="text" placeholder="Add your comment" />
              <input type="submit" name="Send" value="Send" />
            </form>
<<<<<<< HEAD
          </div>`
    );
  });
=======
          </div>`)
            })  
          // let allpost = document.querySelectorAll('.myPost')
          // console.log(allpost[0].dataset.id)
}
>>>>>>> 72969f329781972833f05512d139f94d756893e7

  var date = new Date();
  console.log(date);
}

<<<<<<< HEAD
// Tim recent friend post
function generateRecentPost() {
  console.log(`${document.cookie.split("=")[1]}`);
  axios
    .get(`api/posts/friendrecentposts/${document.cookie.split("=")[1]}`)
    .then(({ data }) => {
      // console.log(data)
      // var utcDate = new Date(item.createdAt.toUTCString());
      // utcDate.setHours(utcDate.getHours());
      // var usDate = new Date(utcDate);
      data.forEach((item) => {
        console.log(item.createdAt);
        $(".postlist").prepend(
          `  <div class="userpost" data-postid='${item.id}'>
                        <button>
=======
  // Tim recent friend post
  function generateRecentPost()
  {
        axios.get(`api/posts/friendrecentposts/${document.cookie.split("=")[1]}`)
        .then( ({data}) =>
            {

                data.forEach(item => {
                    console.log(item)
                    $(".postlist").prepend(
                        `  <div class="userpost" data-postid='${item.id}'>
                        <button onclick=showPost('${item.id}','${item.user.firstName}','${item.user.lastName}')>
>>>>>>> 72969f329781972833f05512d139f94d756893e7
                        <p>User:${item.user.firstName}<p>
                        <p> ${item.body.slice(0, 20)}... </p>
                        <p>At: ${item.createdAt.split(/[a-zA-Z.]/)[1]} <p>
                       </button>
                      </div>`
<<<<<<< HEAD
        );
      });
    })
    .catch((err) => console.error(err));
}

// Add new post
document.getElementById("post").addEventListener("click", (event) => {
  event.preventDefault();
=======
                    )
                });
              
            }
        )
        .catch(err => console.error(err))
  }
// Show post
function showPost(data,fname,lname)
{
  // console.log(fname)
    axios.get(`api/posts/getpost/${data}`)
    .then(({data}) => 
      {
        $('.main').empty()
        userPost([data],fname,lname)
      }
    )
    .catch(err => console.error(err))
}

// Add new post
let recent = false
document.getElementById('post').addEventListener('click', event =>
{
  event.preventDefault()
>>>>>>> 72969f329781972833f05512d139f94d756893e7

  let formData = new FormData(document.getElementById("POSTIT"));
  // formData.append('files', )
<<<<<<< HEAD
  if (
    document.getElementById("file").value.length > 0 ||
    document.getElementById("posttext").value !== ""
  ) {
    axios
      .post("api/posts/addpost", formData)
      .then(({ data }) =>
        userPost([data[0].data], data[1].firstName, data[1].lastName)
      )
      .catch((err) => console.error(err));
=======
  if(document.getElementById('file').value.length > 0 || document.getElementById('posttext').value !== '')
  {
  axios.post('api/posts/addpost', formData)
  .then(({ data }) => {
    if(!recent)
    {
      $('.main').scrollTop(0)
      userPost([data[0].data],data[1].firstName,data[1].lastName)
    }
    else
    {
      loggedInStatus()
    }
  
  })
  .catch(err => console.error(err))
  
  // console.log(formData)

  document.getElementById('file').value = null
  document.getElementById('posttext').value = ''
}
>>>>>>> 72969f329781972833f05512d139f94d756893e7

    // console.log(formData)

    document.getElementById("file").value = null;
    document.getElementById("posttext").value = "";
  }

  document.getElementById("posttext").focus();
});

// Add friend on click

// //show a list of other users who are not friends yet with me - hoyeon
const renderFriendSuggestion = () => {
  if (!document.cookie.split("=")[1]) {
    console.log("Not logged in");
  } else {
    axios
      .get(`/api/friend/findfriend/${document.cookie.split("=")[1]}`)
      .then(({ data }) => {
        document.getElementById("friendSuggest").innerHTML = "";
        for (let i = 0; i < data.length; i++) {
          let notfriendElem = document.createElement("div");
          notfriendElem.innerHTML = `<button id='add' onclick=addFriend('${data[i].uuid}') > + ${data[i].firstName} ${data[i].lastName}</button>`;
          document.getElementById("friendSuggest").append(notfriendElem);
        }
      })
      .catch((err) => console.log(err));
  }
  renderMyFriends();
};

// let addFriend = document.querySelector('#myfriend')
function addFriend(id) {
  if (event.target.id === "add") {
    axios
      .post("api/friend/addfriend", {
        userUuid: document.cookie.split("=")[1],
        friendUuid: id,
      })
      .then(() => {
        renderFriendSuggestion();
        renderMyFriends();
      })
      .catch((err) => console.error(err));
  }
}

//delete a friend from myfriendList - hoyeon
function unFriend(id) {
<<<<<<< HEAD
  if (event.target.id === "unFriend") {
=======
>>>>>>> 72969f329781972833f05512d139f94d756893e7
    axios
      .delete("api/friend/unfriend", {
        data: {
          userUuid: document.cookie.split("=")[1],
          friendUuid: id,
        },
      })
      .then(() => {
        renderMyFriends();
        renderFriendSuggestion();
      })
      .catch((err) => console.error(err));
<<<<<<< HEAD
  }
=======
>>>>>>> 72969f329781972833f05512d139f94d756893e7
}

//show all users who are currently friends with me- hoyeon
const renderMyFriends = () => {
  axios
    .get(`/api/users/info/${document.cookie.split("=")[1]}`)
    .then(({ data }) => {
      let friendData = data.UserFriends;
      document.getElementById("friendList").innerHTML = "";
      for (let i = 0; i < friendData.length; i++) {
        let friendElem = document.createElement("div");
        friendElem.innerHTML = `<div class="friendbox"><button class='myfriend'> ${friendData[i].firstName} ${friendData[i].lastName}</button><button id='unFriend' onclick=unFriend('${friendData[i].Id}')><span>🗑️</span></button></div>`;
        document.getElementById("friendList").append(friendElem);
      }
    })
    .catch((err) => console.log(err));
};


// Add comment
// document.getElementById('')

// const logOut = () => {
//   console.log("hello");
//   var date = new Date();
//   var utcDate = new Date(date.toUTCString());
//   utcDate.setHours(utcDate.getHours());
//   var usDate = new Date(utcDate);
//   document.cookie = `name=''; expires = ${usDate.toUTCString()}`;
//   window.location.replace("/");
// };

// //show all users who are currently friends with me- hoyeon
// const renderMyFriends = () => {
//   axios
//     .get(`/api/users/info/${document.cookie.split("=")[1]}`)
//     .then(({ data }) => {
//       let friendData = data.UserFriends;
//       console.log(friendData);
//       document.getElementById("friendList").innerHTML = "";
//       for (let i = 0; i < friendData.length; i++) {
//         let friendElem = document.createElement("div");
//         friendElem.innerHTML = `<button id='myfriend'> ${friendData[i].firstName} ${friendData[i].lastName}</button>`;
//         document.getElementById("friendList").append(friendElem);
//       }
//     })
//     .catch((err) => console.log(err));
// };

// document.addEventListener("click", (event) => {
//   event.preventDefault();
//   if (event.target.id === "add") {
//     axios
//       .post("api/friend/addfriend", {
//         userUuid: document.cookie.split("=")[1],
//         friendUuid: event.target.dataset.item,
//       })
//       .then(() => {
//         renderFriendSuggestion();
//         renderMyFriends();
//       })
//       .catch((err) => console.error(err));
//   }
// });

// //show a list of other users who are not friends yet with me - hoyeon
// const renderFriendSuggestion = () => {
//   if (!document.cookie.split("=")[1]) {
//     console.log("Nothing");
//   } else {
//     console.log("connected");
//     axios
//       .get(`/api/friend/findfriend/${document.cookie.split("=")[1]}`)
//       .then(({ data }) => {
//         document.getElementById("friendSuggest").innerHTML = "";
//         for (let i = 0; i < data.length; i++) {
//           console.log(data[i]);
//           let notfriendElem = document.createElement("div");
//           notfriendElem.innerHTML = `<button id='add' data-item="${data[i].uuid}" > + ${data[i].firstName} ${data[i].lastName}</button>`;
//           document.getElementById("friendSuggest").append(notfriendElem);
//         }
//       })
//       .catch((err) => console.log(err));
//   }
//   renderMyFriends();
// };

// const loggedInStatus = () => {
//   if (!document.cookie.split("=")[1]) {
//     console.log("Nothing");
//   } else {
//     console.log("Something");
//     axios
//       .get(`/api/users/info/${document.cookie.split("=")[1]}`)
//       .then(({ data }) => {
//         console.log(data);
//         //Suggestion(hoyeon): how about using an username instaed of first & lastname?
//         document.getElementById("loggedIn").innerHTML = `
//               Logged in as ${data.FirstName} ${data.LastName}
//               <button id='logOut' onclick='logOut()'>Log Out</button>
//               `;
//               generateRecentPost()
//       })
//       .catch((err) => console.log(err));
//   }
// };

// // Generate recent post
//   function generateRecentPost()
//   {
//       console.log(`${document.cookie.split("=")[1]}`)
//         axios.get(`api/posts/friendrecentposts/${document.cookie.split("=")[1]}`)
//         .then( ({data}) =>
//             {
//                 console.log(data)
//                 data.forEach(item => {
//                     // console.log(item)
//                     $(".postlist").prepend(
//                         `  <div class="userpost" data-postid='${item.id}'>
//                         <button>
//                         <p>User:${item.user.firstName}<p>
//                         <p> ${item.body.slice(0,20)}... </p>
//                         <p>At: ${item.createdAt.split(/[a-zA-Z.]/)[1]} <p>
//                        </button>
//                       </div>`
//                     )
//                 });

//             }
//         )
//         .catch(err => console.error(err))
//   }

//   // Submit new post
//   document.getElementById('post').addEventListener('click', event =>
// {
//   event.preventDefault()
//   let formData = new FormData(document.getElementById('POSTIT'))
//   // formData.append('files', )
//   axios.post('api/posts/addpost', formData)
//   .then(({ data }) => userPost([data[0].data],data[1].firstName,data[1].lastName))
//   .catch(err => console.error(err))
// })

// // User post
// function userPost(userPost,firstName,lastName)
// {
//   console.log(userPost)
//     userPost.forEach(post => {
//         // console.log("In userpost")
//         // console.log(post)
//         let comments = post.comments.reduce((allComments, comments) =>
//         {
//             return allComments +=
//            ` <p>Name: <span>${comments.title}</span></p>`

//             // console.log(comments)
//         }
//         ,'')

//         $('.main').prepend(
//             `
//             <div class="myPost">
//             <p>${firstName} ${lastName}</p>
//             <p>${post.body}</p>
//             <div class="image">
//             <img src="${post.image}" alt="" class="postImage">
//                </div>
//             <hr />
//             <div class="commentArea">
//             ${comments}
//             </div>
//             <form  method="POST" data-postId="${post.id}"class="commentForm">
//               <input type="text" placeholder="Add your comment" />
//               <input type="submit" name="Send" value="Send" />
//             </form>
//           </div>`)
//             })
// }

function init() {
  loggedInStatus();
  renderFriendSuggestion();
}

init();
