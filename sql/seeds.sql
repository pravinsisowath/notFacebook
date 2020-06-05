
-- Login 
/api/users/:password/:username/login
{
	"username" : "#",
	"password" : '#'
}

-- Get user info
/api/users/info/:password/:uuid 

-- Add new user/register syntax
/api/users/register
{
	"username" : "SlimJim",
	"password" : "123",
	"firstName" : "Slim",
	"lastName" : "Jim",
	"age" : 25,
	"email" : "SlimJim@gmail.com",
	"gender" : "male",
	"activated": 0
}

<<<<<<< HEAD
{
	"body" : "this might be our first post yay",
	"userUuid" : "7358805e-27f0-45c3-90a2-7f1a11611bfe"
}

{
    "user1id": "",
    "user2id": "",
}
=======
-- Update user info
/api/users/update/:password/:uuid
{
	"username" : "#",
	"password" : "#",
	"firstName" : "#",
	"lastName" : "#",
	"age" : #,
	"email" : "#@#.#",
	"gender" : "male",
	"activated": #
}

-- Delete account
/api/users/delete/:password/:uuid

-- Unfriend syntax - requires 2 params userUuid and friendUuid
{
	"userUuid" : "provide user 1 uuid",
	"friendUuid" : "provide user 2 uuid"
} 
>>>>>>> 5f809f55e440901f50f6efbf960d456f75e946e5
