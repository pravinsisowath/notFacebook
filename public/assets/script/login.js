
// const socket = io()

// socket.on('onUpdate', message=>
// {
//     console.log(message)
// })

// location.reload()
document.getElementById('signin').addEventListener('submit', event =>
{
    event.preventDefault()
    axios.get(`/api/users/${event.target.username.value}/${event.target.password.value}/login`)
    .then(({data}) => {

        if(data === null){document.getElementById('loginError').innerHTML = "Wrong username or password, please try again"}
        else{
            axios.get('/:succeed')
            location.reload()
            sessionSet(data)
        }
    })
    .catch(err => console.error(err))
})


document.getElementById('signup').addEventListener('submit', event =>
{   
    event.preventDefault()
    if(ValidateEmail(event.target.email.value))
    {
    let newUser = {
    username : event.target.username.value,
	password : event.target.password.value,
	firstName : event.target.firstName.value,
	lastName : event.target.lastName.value,
	age : event.target.age.value,
	email : event.target.email.value,
	gender : event.target.gender.value,
	activated : 0
    }
    axios.post('/api/users/',newUser)
    .then( data => console.log(data))
    .catch(err => console.log(err))
    }
    else{
        console.log("Error")
    }
})


document.getElementById('email').addEventListener('keyup', event =>
    {
       let time
       clearInterval(time)
       time = setTimeout(() => {
            if(ValidateEmail(document.getElementById('email').value) || !/\S/.test(document.getElementById('email').value))
            {
                document.getElementById('emailError').innerHTML = `` }
            else
            {
                document.getElementById('emailError').innerHTML = "Invalid email !"
            }
        }, 1000);
       
    })

    function ValidateEmail(email) 
    {
      return(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
    }

function sessionSet(data)
{
    var date = new Date();
    var utcDate = new Date(date.toUTCString());
    utcDate.setHours(utcDate.getHours() + 1);
    var usDate = new Date(utcDate);
    document.cookie = `name=${data}; expires = ${usDate.toUTCString()}` 
}

window.addEventListener("blur", event =>
{
    sessionSet(document.cookie.split('=')[1])
});