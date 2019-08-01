# Use My Tech Stuff
 💥🔥📷📺💻🏠⑁ 🔥💥

 UMTS [Use My Tech Stuff] is a platform for connecting users in need of renting equipment/properties with the users willing to rent out same. It eliminates the overhead cost due to middlemen in renting equipment or properties.


[![Build Status](https://travis-ci.org/build-week-use-my-tech-stuff-umts/umts-backend.svg?branch=develop)](https://travis-ci.org/build-week-use-my-tech-stuff-umts/umts-backend) [![Coverage Status](https://coveralls.io/repos/github/build-week-use-my-tech-stuff-umts/umts-backend/badge.svg?branch=develop)](https://coveralls.io/github/build-week-use-my-tech-stuff-umts/umts-backend?branch=develop) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Api Docs

> BASE_URL : https://umts-backend.herokuapp.com/api/

> [Link to the API documentation](https://documenter.getpostman.com/view/4448465/SVYkw1n2?version=latest)

# Endpoints Summary

| Verb | Route | Description | Auth Required |
|------|-------|-------------|---------------|
|   GET   |  /      |   Index Route          |   false            |
|   POST   |  `/auth/register`      |    Create account          |      false         |
|  POST    |  `/auth/login`      |   Sign in          |   false            |
|   PUT   |   `/auth/profile`    |    Update Profile         |      true        |
|   GET   |   `/rentItems`    |     Get list of rent items        |    false           |
|   GET   |  `/rentItems/:itemId`     | Get single item            |    false           |
|   PUT   |  `/rentItems/:itemId`     |    Update an item         |   true            |
|   DELETE   |  `/rentItems/:itemId`     |   Delete item          |   true            |
|   GET   |  `/rentItems/:catId/categories/`     |   Get items under a category          |  false             |
|   GET   | `/categories`     |     Get List of item categories        |    false           |
|  POST    |  `/categories`  |  Create a category           |    true           |
|   POST   |  `/rentItems/1/reviews`     |   Add Review to an item          |    true           |
|  POST    |   `/rentItems/1/bookings`    |  rent an item           |  true             |
|   GET   |  `/auth/users/:userId`     |  Get single user details           |  true             |
|

# Framework/libraries
- [Express](https://expressjs.com/)
- [Sequelize ORM](https://sequelize.org/)
- [Express validator](http://exss-validator.github.io/docs)
- [Express Error Bouncer](https://www.npmjs.com/package/express-error-bouncer)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

# Test libraries
- [Jest](https://jestjs.io/docs)
- [Supertest](https://www.npmjs.com/package/supertest)

# Tools
- [Travis](https://travis-ci.org/build-week-use-my-tech-stuff-umts)
- [Coveralls](https://coveralls.io/github/build-week-use-my-tech-stuff-umts/umts-backend)

# Licence
- MIT 
