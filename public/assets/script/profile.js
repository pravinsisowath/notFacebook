// const socket = io()

// socket.on('onUpdate', message=>
// {
//     console.log(message)
// })

// socket.on('Update', message=>
// {
//     console.log("Update emit " + message)
// })


const logOut = () => {
    console.log('hello')
    var date = new Date();
    var utcDate = new Date(date.toUTCString());
    utcDate.setHours(utcDate.getHours());
    var usDate = new Date(utcDate);
    document.cookie = `name=''; expires = ${usDate.toUTCString()}`; 
    window.location.replace("/");
    }


  if (!document.cookie.split("=")[1]) {
      console.log("Nothing")
  } else {
      console.log('Something')
    axios
      .get(`/api/users/info/${document.cookie.split("=")[1]}`)
      .then(({ data }) => {
        
          generateRecentPost()
          console.log(data.UserPost)
          userPost(data.UserPost,data.UserInfo.FirstName,data.UserInfo.LastName)
        document.getElementById("loggedIn").innerHTML = `
              Logged in as ${data.UserInfo.FirstName} ${data.UserInfo.LastName}
              <button id='logOut' onclick='logOut()'>Log Out</button>
              `;

      })
      .catch((err) => console.log(err));
  }

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
            `  <div class="myPost">
            <p>${firstName} ${lastName}</p>
            <p>Content: ${post.body}</p>
            <hr />
            <div class="commentArea">
                ${comments}
            </div>

            <form action="" class="commentForm">
              <input type="text" placeholder="Add your comment" />
              <input type="submit" name="Send" value="Send" />
            </form>
          </div>`
        )
        // console.log(comments)
        // let comments = post.comment.reduce( 
            // allSearches = variable for initial value of reduce 
            // cityObject = is each item within the list sequentially 
            // (allComments, comments) => { 
            //     console.log(allComments)  
            //     console.log(comments) }  ) 
            })
            
}


  // Tim recent friend post
  function generateRecentPost()
  {
      console.log(`${document.cookie.split("=")[1]}`)
        axios.get(`api/posts/friendrecentposts/${document.cookie.split("=")[1]}`)
        .then( ({data}) =>
            {
                console.log(data)
                data.forEach(item => {
                    // console.log(item)
                    $(".postlist").prepend(
                        `  <div class="userpost" data-postid='${item.id}'>
                        <button>
                        <p>User:${item.user.firstName}<p>
                        <p> ${item.body.slice(0,20)}... </p>
                        <p>At: ${item.createdAt.split(/[a-zA-Z.]/)[1]} <p>
                       </button>
                      </div>`
                    )
                });
              
            }
        )
        .catch(err => console.error(err))
  }