## Post test 1 - successful signup

(<img src="postman test - signup POST.png">)

Comments:

- I was unable to figure out through standard testing alone what was going wrong with my routes. I tried and failed to use sinon to mock validationResult from express-validator and using high level testing of routes did not show results, only timeouts.
- After using postman, I could see in my console that Mongoose functions no longer accept callbacks, which was causing my server to crash.
- Result: Upgraded my code to use modern js syntax and resulted in status code: 200 as expected.

## Post test 2 - successful signin

(<img src="postman tests - successful login.png">)

Comments:

- Successful sign in first time.
- Returns a jwt token as expected.
- returns all user details to be used for chitter personalisation.

## 3 - user not found

comments:

- returns status code 404.
- returns message as expected.

## 4 - incorrect password

comments:

- 401 unauthorised request.
- returns expected message.
- JWT accessToken set to null.

## 5 - attempt signup with duplicate username

comments:

- 400 bad request.
- expected message appears.

## 6 - attempt signup with duplicate email

comments:

- 400 bad request.
- expected message appears.

## 7 - attempt signup with invalid email format

comments:

- 422 unprocessable entity.
- Expected error message occurs.

## 8 - FAIL - invalid password accepted

comments:

- password field should enforce standard password recommendations.
- should include at least one special character.
- check validation rules in schema and try again.
- Upon checking, I realise I am hashing my passwords before saving to database, meaning my validation rules are being met inadvertently by the hashed version of the password.

## 9 - PASS - invalid password rejected

comments:

- changed password hashing to be handled by schema using mongoose schema's pre("save", function(next)) method. Mongoose now handles hashing of password before sending to database which means schema validators are no longer bypassed for password inputs.
- Changed authController signup function to use mongoose user.validate() function to check validation rules have been met, then returned the error messages as code 422 unprocessable entity, leaving code 500 for any other error types. Now validator error messages are sent back as intended.
-

## 10 - checkDuplicateUsernameOrEmail retest

comments:

- my previous change to signin function to handle mongoose validation error messages broke my tests for this middleware function. I used postman to verify the function still performs as expected which meant I needed to change the way i was stubbing the findOne method in my tests.
- Used Co-pilot to help find the differences after an hour of trying and researching the documents online to no avail - see use of ai screenshots folder failed middleware tests fix. Tests had changed to all respond with username already in use code 400, without moving on probably due the change in how many times findOne is called as I think Mongoose validator looks as well with the same function when the Unique field is set to true. All tests pass now.

## 11 - try signup with empty fields

comments:

- Used to verify expected results before using mocking to test results in test files.
- 422 unprocessable entity
- error message as expected.

## 12 - posting a peep

comments:

- 200 accepted.
- post accepted jwt token generated on sign in to allow user with same id to post.
- Expected message.

## 13 - try to post using a different user id than in the jwt

comments:

- 403 unauthorised.
- Expected message appears.

## 14 - get peep by id

comments:

- returns the correct peep.
- works first time as intended.
