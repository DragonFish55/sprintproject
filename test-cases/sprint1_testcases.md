# Test Cases

## Test Case 1
### Test Case Id => Status Code 200 test
### Description => 
##### Test that utilizies Postman to send an http(s) request to our signin API
##### in order to test that the API is functioning properly given correct input data
##### by checking that if, given the correct data, the API sends back a response with status code 200
### Test Steps => 
##### First start the server running the API's on either heroku or localhost, whichever one is used.
##### Next go to the Postman website (or use postman desktop) and create a new JSON HTTP POST request to the endpoint /api/signin. 
##### Finally, send a request with a username and password, for a user already in the server's database
##### using the raw text option an in the format {username: value, password: value} 
### Pre-requisities => Server that is running the signup API and a Postman account to send an http(s) request
### Author => John Paglia
### Test Method => Signin Method
### Pass/Fail Criteria => 
#### The test is a pass if the response from the server is status code 200


## Test Case 2
### Test Case Id => Status Code 400 test
### Description =>
##### Test that utilizies Postman to send an http(s) request to our signup API
##### in order to test that the API, given incorrect data format, will not process the request and
##### return a 400 error
### Test Steps => 
##### First start the server running the API's on either heroku or localhost, whichever one is used.
##### Next go to the Postman website (or use postman desktop) and create a new JSON HTTP POST request to the endpoint /api/signup. 
##### Finally, send a request with a username and password but incorrectly format the json message such as removing
##### the comma between the data values. By doing this the data cannot be processed correctly. Finally send the post 
##### request.
### Pre-requisities => Server that is running the signup API and a Postman account to send an http(s) request
### Author => John Paglia
### Test Method => Signup Method
### Pass/Fail Criteria =>
#### The test is a pass if the response from the server is a status code 400 error message and fails if there
#### is any other message or result

## Test Case 3
### Test Case Id => Status Code 401 test
### Description =>
##### Test that utilizies Postman to send an http(s) request to our signin API
##### in order to test that the API, given incorrect user credentials, will return 
##### a status code 401 error which indicates invalid login or invalid signup new user
### Test Steps =>
##### First start the server running the API's on either heroku or localhost, whichever one is used.
##### Next go to the Postman website (or use postman desktop) and create a new JSON HTTP POST request to the endpoint /api/signin. 
##### Finally, send a request with a username and password, for a user not already in the server's database
##### using the raw text option an in the format {username: value, password: value}
### Pre-requisities => Server that is running the signin API and a Postman account to send an http(s) request
### Author => John Paglia
### Test Method => Signin API Method
### Pass/Fail Criteria =>
#### The test is a pass if the response from the server is a status code 401 error message and fails if there
#### is any other message or result

## Test Case 4
### Test Case Id => Status Code 404 test
### Description => 
##### Test that utilizies Postman to send an http(s) request to our signup API
##### in order to test that the API, given incorrect api endpoint, returns a 404 
##### not found status code
### Test Steps =>
##### First start the server running the API's on either heroku or localhost, whichever one is used.
##### Next go to the Postman website and create a new JSON HTTP POST request to the endpoint /api/signup/userenp. 
##### Finally, send a request with a username and password, for a user not already in the server's database
##### using the raw text option an in the format {username: value, password: value}. Because there is no /api/signup/userenp
##### endpoint the server will respond with a 404 not found status code.
### Pre-requisities => Server that is running the signup API and a Postman account to send an http(s) request
### Author => John Paglia
### Test Method => Signup Method
### Pass/Fail Criteria => 
#### The test is a pass if the response from the server is a status code 404 error message and fails if there
#### is any other message or result

## Test Case 5
### Test Case Id => Status Code 500 test
### Description => 
##### Test that utilizies Postman to send an http(s) request to our signin API
##### in order to test that the API, given incorrect content type header with correct
##### JSON data, format and api endpoint, will return an error 500 status code to the user
### Test Steps => 
##### First start the server running the API's on either heroku or localhost, whichever one is used.
##### Next go to the Postman website and create a new JSON HTTP POST request to the endpoind /api/signup. 
##### Finally, send a request with a username and password, for a user not already in the server's database
##### using the raw text option an in the format {username: value, password: value}
### Pre-requisities => Server that is running the signup API and a Postman 
#### account to send an http(s) request
### Author => John Paglia
### Test Method => Signin Method
### Pass/Fail Criteria =>
#### The test is a pass if the response from the server is a status code 500 error message and fails if there
#### is any other message or result

## Test Case 6
### Test Case Id => Signup Validation
### Description => 
#### User tests that upon entering a new user, which
#### includes usernane and password, as long as the
#### data input passes all validity checks a user will
#### be added to the database
### Test Steps
#### First start the react app and proceed to your signup page.
#### Next according the requirements of the username and 
#### password enter new user info into the form. Finally click
#### submit and if a dialog box pops up confirming creation then 
#### the new user was created
### Pre-requisities => Server that is running the signup API and a Postman
### Author => John Paglia
### Test Method => callApi(url, data)
### Pass/Fail Criteria => 
#### If 

## Test Case 7
### Test Case Id => Password Missing Lowercase Characters
### Description
### Test Steps
### Pre-requisities => Server that is running the signup API and our local react app
### Author => John Paglia
### Test Method => checkLowerChar(password)
### Pass/Fail Criteria

## Test Case 8
### Test Case Id => Password Has Lowercase Characters
### Description
### Test Steps
### Pre-requisities => Server that is running the signup API and our local react app
### Author => John Paglia
### Test Method => checkLowerChar(password)
### Pass/Fail Criteria

## Test Case 9
### Test Case Id => Password Missing Uppercase Characters
### Description
### Test Steps
### Pre-requisities => Server that is running the signup API and our local react app
### Author => John Paglia
### Test Method => checkUpperChar(password)
### Pass/Fail Criteria

## Test Case 10
### Test Case Id => Password Has Uppercase Characters
### Description
### Test Steps
### Pre-requisities => Server that is running the signup API and our local react app
### Author => John Paglia
### Test Method => checkUpperChar(password)
### Pass/Fail Criteria

## Test Case 11
### Test Case Id => Password Missing Non Letters
### Description =>
#### Tests whether the password input on the signup form page contains at least one character that is 
#### not a letter such as a number or a special character
### Test Steps => 
#### Start react frontend app locally. Then go to the signup page and create a new user
#### by entering at least one 
### Pre-requisities => Server that is running the signup API and our local react app
### Author => John Paglia
### Test Method => checkNotLetter(password)
### Pass/Fail Criteria

## Test Case 12
### Test Case Id => Password Has Non Letters
### Description
### Test Steps
### Pre-requisities => Server that is running the signup API and our local react app
### Author => John Paglia
### Test Method => checkNotLetter(password)
### Pass/Fail Criteria

## Test Case 13
### Test Case Id => Password Less Than 8 Characters
### Description
### Test Steps
### Pre-requisities => Server that is running the signup API and our local react app
### Author => John Paglia
### Test Method => checkLength(stringIn, length)
### Pass/Fail Criteria

## Test Case 14
### Test Case Id => Password Greater Than 7 Characters
### Description
### Test Steps
### Pre-requisities => Server that is running the signup API and our local react app
### Author => John Paglia
### Test Method => checkLength(stringIn, length)
### Pass/Fail Criteria

## Test Case 15
### Test Case Id => Username Less Than 8 Characters
### Description
### Test Steps
### Pre-requisities => Server that is running the signup API and our local react app
### Author => John Paglia
### Test Method => checkLength(stringIn, length)
### Pass/Fail Criteria - If the signup page does not display the 
#### appropriate error message for entering less than 8 characters
#### then the test is a pass. Otherwise the test fails.

## Test Case 16
### Test Case Id => Username Greater Than 7 Characters
### Description
### Test Steps
### Pre-requisities => Server that is running the signup API and our local react app
#### that allows the user to enter data to create a user
### Author => John Paglia
### Test Method => checkLength(stringIn, length)
### Pass/Fail Criteria - If signup page has no error message for the length of the 
#### username then the test is a pass otherwise it is a failure
