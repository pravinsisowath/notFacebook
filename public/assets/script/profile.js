const userPost = (userPost, firstName, lastName) => {
  
  userPost.forEach(post => {
    
    let comments = post.comment.reduce(
    // allSearches = variable for initial value of reduce
    // cityObject = is each item within the list sequentially
    (allComments, comments) => {
      console.log(allComments)
      console.log(comments)
      // return allComments += `<p onclick='setCurrentSearch("${cityObject.city.name}")' class="list-group-item">${cityObject.city.name}</p>`
    }, '')
    $(".main").prepend(`
      <div data-set='${post.id}' class="myPost">
              <p>'${firstName} ${lastName}'</p>
              <p>${post.body}</p>
              <hr />
              <div class="commentArea">
                <p>Name: <span>this is a comment</span></p>
                <p>Name: <span>this is a comment</span></p>
                <p>Name: <span>This is a comment</span></p>
                <p>Name: <span>This is a comment</span></p>
                
              </div>
  
              <form action="" class="commentForm">
                <input type="text" placeholder="Add your comment" />
                <input type="submit" name="Send" value="Send" />
              </form>
            </div>
      `
    )
  })
}


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
        console.log(data)

      document.getElementById("loggedIn").innerHTML = `
            Logged in as ${data.UserInfo.FirstName} ${data.UserInfo.LastName}
            <button id='logOut' onclick='logOut()'>Log Out</button>
            `;
            userPost(data.UserPost, data.UserInfo.FirstName, data.UserInfo.LastName)
    })
    .catch((err) => console.log(err));
}