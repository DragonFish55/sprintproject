# Test Cases

## Status Code 200 test
### Test Case Id: 1
### Description
Test that utilizies Postman to send an http(s) request to our signin API in order to test that the API is functioning properly given correct input data by checking that if, given the correct data, the API sends back a response with status code 200.
### Test Steps
1. First start the server running the API's on either heroku or localhost, whichever one is used.
2. Next go to the Postman website (or use postman desktop) and create a new JSON HTTP POST request to the endpoint /api/signin. 
3. Finally, send a request with a username and password, for a user already in the server's database using the raw text option an in the format {username: value, password: value}
### Pre-requisities
Server that is running the signup API and a Postman account to send an http(s) request
### Author: John Paglia
### Test Method: Signin Method
### Pass/Fail Criteria 
The test is a pass if the response from the server is status code 200 and a failure if the response is anything else


## Status Code 400 test
### Test Case Id: 2
### Description
Test that utilizies Postman to send an http(s) request to our signup API in order to test that the API, given incorrect data format, will not process the request and return a 400 error
### Test Steps 
1. First start the server running the API's on either heroku or localhost, whichever one is used.
2. Next go to the Postman website (or use postman desktop) and create a new JSON HTTP POST request to the endpoint /api/signup. 
3. Finally, send a request with a username and password but incorrectly format the json message such as removing the comma between the data values. By doing this the data cannot be processed correctly.
### Pre-requisities
Server that is running the signup API and a Postman account to send an http(s) request
### Author: John Paglia
### Test Method: Signup Method
### Pass/Fail Criteria
The test is a pass if the response from the server is a status code 400 error message and fails if there is any other message or result

## Status Code 401 test
### Test Case Id: 3
### Description
Test that utilizies Postman to send an http(s) request to our signin API in order to test that the API, given incorrect user credentials, will return  a status code 401 error which indicates invalid login or invalid signup new user
### Test Steps
1. First start the server running the API's on either heroku or localhost, whichever one is used.
2. Next go to the Postman website (or use postman desktop) and create a new JSON HTTP POST request to the endpoint /api/signin. 
3. Finally, send a request with a username and password, for a user not already in the server's database using the raw text option an in the format {username: value, password: value}
### Pre-requisities
Server that is running the signin API and a Postman account to send an http(s) request
### Author: John Paglia
### Test Method: Signin API Method
### Pass/Fail Criteria
The test is a pass if the response from the server is a status code 401 error message and fails if there is any other message or result

##  Status Code 404 test
### Test Case Id: 4
### Description 
Test that utilizies Postman to send an http(s) request to our signup API in order to test that the API, given incorrect api endpoint, returns a 404 not found status code
### Test Steps
1. First start the server running the API's on either heroku or localhost, whichever one is used.
2. Next go to the Postman website and create a new JSON HTTP POST request to the endpoint /api/signup/userenp. 
3. Finally, send a request with a username and password, for a user not already in the server's database using the raw text option an in the format {username: value, password: value}. Because there is no /api/signup/userenp endpoint the server will respond with a 404 not found status code.
### Pre-requisities
Server that is running the signup API and a Postman account to send an http(s) request
### Author: John Paglia
### Test Method: Signup Method
### Pass/Fail Criteria 
The test is a pass if the response from the server is a status code 404 error message and fails if there is any other message or result

## Status Code 500 test
### Test Case Id: 5
### Description  
Test that utilizies Postman to send an http(s) request to our signin API in order to test that the API, given incorrect content type header with correct JSON data, format and api endpoint, will return an error 500 status code to the user
### Test Steps  
1. First start the server running the API's on either heroku or localhost, whichever one is used.
2. Next go to the Postman website and create a new JSON HTTP POST request to the endpoind /api/signup. 
3. Finally, send a request with a username and password, for a user not already in the server's database using the raw text option an in the format {username: value, password: value}
### Pre-requisities
Server that is running the signup API and a Postman account to send an http(s) request
### Author: John Paglia
### Test Method: Signin Method
### Pass/Fail Criteria
The test is a pass if the response from the server is a status code 500 error message and fails if there is any other message or result.

## Signup User Creation Test
### Test Case Id: 6
### Description 
User tests that upon entering a new user, which includes usernane and password, as long as the data input passes all validity checks a user will be added to the database
### Test Steps
1. First start the react app and proceed to your signup page.
2. Next according the requirements of the username and password enter new user info into the form. 
3. Finally click submit and if a message pops up confirming the user creation then the new user was created and the test is passed
### Pre-requisities
Server that is running the signup API and a Postman
### Author: John Paglia
### Test Method: callApi(url, data)
### Pass/Fail Criteria 
If user is successfully added to the database with our User table then the test passes. Otherwise the test is a failure. 

## Password Missing Lowercase Characters Test
### Test Case Id: 7
### Description 
Check to see if password input into signup form does not contain lowercase characters
### Test Steps 
1. Start react app and navigate to the signup page.
2. Enter a new password in either all uppercase or non letter characters. 
3. Click signup button and if an error message appears that says the password is missing lowercase characters then the test passes.
### Pre-requisities
Server that is running the signup API and our local react app
### Author: John Paglia
### Test Method: checkLowerChar(password)
### Pass/Fail Criteria 
If an error message is displayed on the signup page that says the password does not contain lowercase letters then the test passes. Otherwise the test fails.

## Password Has Lowercase Characters Test
### Test Case Id: 8
### Description 
Check to see if password input into signup form does contain lowercase characters
### Test Steps 
1. Start react app and navigate to the signup page. 
2. Enter a new password in using at least 1 lowercase letter.
3. Click signup button and if an error message does not appear that says the password is missing lowercase characters then the test passes.
### Pre-requisities
Server that is running the signup API and our local react app
### Author: John Paglia
### Test Method: checkLowerChar(password)
### Pass/Fail Criteria
If no error message is displayed on the signup page that says the password does not contain lowercase letters then the test passes. Otherwise the test fails.

## Password Missing Uppercase Characters Test
### Test Case Id: 9
### Description
Test checks if uppercase characters are missing from the password entered into the signup form
### Test Steps 
1. Start react frontend app locally. 
2. Then go to the signup page and create a new user by entering a password that no uppercase characters. 
3. Finally after clicking the signup button if an error message appears that says the password needs uppercase characters then the test passes. 
### Pre-requisities 
Server that is running the signup API and our local react app
### Author: John Paglia
### Test Method: checkUpperChar(password)
### Pass/Fail Criteria 
If an error message is displayed on the signup page that says the password does not contain uppercase letters then the test passes. Otherwise the test fails.

## Password Has Uppercase Characters Test
### Test Case Id: 10
### Description 
Test checks if a submitted signup form has a password that contains at least 1 uppercase character
### Test Steps
1. Start react frontend app locally. Then go to the signup page and create a new user by entering a password that contains at least one uppercase character. 
2. Finally after clicking the signup button if no error message appears that says the password needs uppercase characters then the test passes. 
### Pre-requisities
Server that is running the signup API and our local react app
### Author: John Paglia
### Test Method: checkUpperChar(password)
### Pass/Fail Criteria 
If no error message is displayed on the signup page that says the password does not contain uppercase letters then the test passes. Otherwise the test fails.

## Password Missing Non Letters Test
### Test Case Id: 11
### Description
Tests whether the password input on the signup form page is missing characters that are not letters such as a number or a special character
### Test Steps 
1. Start react frontend app locally. Then go to the signup page and try to create a new user by entering a password with only letters (uppercase and lowercase). 
2. If an error appears saying that you did not enter a non letter character then the test is a success.
### Pre-requisities
Server that is running the signup API and our local react app
### Author: John Paglia
### Test Method: checkNotLetter(password)
### Pass/Fail Criteria 
The error message for not entering a letter into the signup form did appear in which case the test passed otherwise the test fails.

## Password Has Non Letters Test
### Test Case Id: 12
### Description 
Tests that the password input into the signup form contains at least 1 non letter character
### Test Steps
1. Start react frontend app locally. 
2. Then go to the signup page and create a new user and instead of entering all correct data, make confirm password or username invalid and the password field of the form valid or just containing 1 non letter and try submitting the form. 
3. If a message does not appear saying that a non letter is required then the test has passed.   
### Pre-requisities
Server that is running the signup API and our local react app
### Author: John Paglia
### Test Method: checkNotLetter(password)
### Pass/Fail Criteria 
The error message for not entering a non letter into the signup form did not appear in which case the test passed otherwise the test fails.

## Password Less Than 8 Characters Test
### Test Case Id: 13
### Description
Tests that the password input into the signup form does not contain at least 8 characters
### Test Steps 
1. Start app and navigate to the signup form. 
2. Enter into the signup form a password less than 8 characters in length. 
3. After clicking signup see if an error message about the password's length appears. If it does then the test is passed.
### Pre-requisities
Server that is running the signup API and our local react app
### Author: John Paglia
### Test Method: checkLength(stringIn, length)
### Pass/Fail Criteria 
If the signup page does display the appropriate error message for entering less than 8 characters then the test is a pass. Otherwise the test fails.

## Password Greater Than 7 Characters Test
### Test Case Id: 14
### Description
Tests that the password input into the signup form contains at least 8 characters
### Test Steps 
1. Start app and navigate to the signup form. 
2. Enter into the signup form a password greater than 7 characters in length. 
3. After clicking signup see if an error message about the password's length appears. If it does not then the test is passed.
### Pre-requisities
Server that is running the signup API and our local react app
### Author: John Paglia
### Test Method: checkLength(stringIn, length)
### Pass/Fail Criteria 
If the signup page does not display the appropriate error message for entering less than 8 characters then the test is a pass. Otherwise the test fails.

## Username Less Than 8 Characters Test
### Test Case Id: 15
### Description 
Test whether username submitted into signup form contains less than 8 characters
### Test Steps 
1. Start app and navigate to the signup form. 
2. Enter into signup form a username less than 8 characters. 
3. After clicking signup see if an error message about the username's length appears. If it does then the test is passed.
### Pre-requisities
Server that is running the signup API and our local react app
### Author: John Paglia
### Test Method: checkLength(stringIn, length)
### Pass/Fail Criteria
If the signup page does display the appropriate error message for entering less than 8 characters then the test is a pass. Otherwise the test fails.

## Username Greater Than 7 Characters Test
### Test Case Id: 16
### Description 
Tests whether the username submitted into the signup form page has at least 8 characters
### Test Steps 
1. Start app and navigate to the signup form. 
2. Enter into signup form a username greater than or equal to 8 characters. After clicking signup see if an error message about the username's length appears. If it does not then the test is passed.
### Pre-requisities 
Server that is running the signup API and our local react app that allows the user to enter data to create a user
### Author: John Paglia
### Test Method: checkLength(stringIn, length)
### Pass/Fail Criteria 
If signup page has no error message for the length of the username then the test is a pass otherwise it is a failure.
