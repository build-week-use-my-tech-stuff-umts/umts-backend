# Use My Tech Stuff

[![Build Status](https://travis-ci.org/build-week-use-my-tech-stuff-umts/umts-backend.svg?branch=develop)](https://travis-ci.org/build-week-use-my-tech-stuff-umts/umts-backend) [![Coverage Status](https://coveralls.io/repos/github/build-week-use-my-tech-stuff-umts/umts-backend/badge.svg?branch=develop)](https://coveralls.io/github/build-week-use-my-tech-stuff-umts/umts-backend?branch=develop) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Api Docs

> BASE_URL : https://umts-backend.herokuapp.com/api/
<pre>
<h3>Register</h3>
<code>
Access: Public
Method: POST
Route: auth/register
Payload: {
   "firstName": String,
   "lastName": String
   "email": String
   "password": String
   "phone": String
   "street": String
   "city": String
   "state": String
   "avatarUrl": String
}

*Required Fields [firstName, lastName, email, password]

Response : {
    "message": "success",
    "user": Object //user object
}

</code>
</pre>

<pre>
<h3>Login </h3>
<code>
Access: Public
Method: POST
Route: auth/login
Payload: {
	"email": String
  "password": String
}

Response : {
    "user": Object // user data
    "token": String //jwt
}
</code>
</pre>