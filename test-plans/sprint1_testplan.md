# Introduction
## Team Z: Harshal Bhole, John Paglia, Megan Resurreccion
This is Team Z's Sprint 1 test plan and test cases document. Below is information on the test plan, cases, and results.

# Test Items
1. Landing Page
2. Sign In Page
3. Sign Up Page

# Features to be Tested
1. Landing Page Features
- "Sign In" Button is at the top of the page when a user is not signed in
- Landing page has the username of the signed in user and a "Sign Out" button available

2. Sign In Page Features
- Text boxes to type in a username and password are available along with a submission button
- Submitting the correct username and password credentials send user to the Landing Page
- Submission of incorrect username and password credentials displays an "incorrect credentials" message

3. Sign Up Page Features
- Text boxes to type in a username, password, and password confirmation are available along with a submission button
- Username text box has input restrictions of the string having 8+ characters and spaces are trimmed
- Password text box has input restrictions of the string having no spaces, trimmed spaces, 8+ characters, 1+ upper case letters, 1+ lowercase letters, and 1 non-letter character (i.e. number or special character)
- Confirmation password text box string matches the password text box string
- Submission of valid credentials sends user to the Landing Page
- Submission of invalid credentials (i.e. input restrictions not met, duplicate username, etc.) displays an "incorrect credentials" message

4. Credentials Database
- Information of username and password credentials created by a new user will be sent and stored in a database.

# Approach
Testing features will start with the front end of the software and end with testing the backend of the software. Ensuring the front end functions is critical prior to ensuring the username and password credentials are sent to the database. Once the code has constructed the appropriate pages and are linked to each other, testing can begin with ensuring that the user is able to navigate from one page to another. This will be done by testing the API endpoints. Entering and creating username and password credentials will be the next essential step. Then, seeing if those credentials are properly stored in the database will be the final step.

# Pass/Fail Criteria
The software application should function as intended with a user having the ability to sign up, sign in, navigate to the landing page, log out, and then log in to the application. There should not be any critical bugs affecting these functions. In addition the server should be able to respond to various types of status code errors.

# Testing Tasks

## API Testing
**Status Code Ok for 200, Signin User**
- Objective: Test that given correct json data format and a post method type when you send a request to the signin api that the api responds with a 200 ok response
- Technique: Use Postman or other similar testing software to make a POST request for the Signin API.
- Completion Criteria: Status Code 200 response received

**Status Code Error for 400**
- Objective: Test that given incorrect json data format the server responds with a status code of 400
- Technique: Use Postman or other similar testing software to make a POST request for the Signin API.
- Completion Criteria: Status Code 400 response received

**Status Code Error for 401**
- Objective: Test that given incorrect credentials the API responds with a status code of 401
- Technique: Use Postman or other similar testing software to make a POST request for the Signin API.
- Completion Criteria: Status Code 401 response received

**Status Code Error for 404**
- Objective: Determine whether the server can respond with a 404 not found
             response indicating that the server could not find the API endpoint
- Technique: Use Postman to call an endpoint on the server
             that is not valid (created).
- Completion Criteria: Status Code 404 response received

**Status Code Error for 500**
- Objective: Test that without the appropriate content-type application/json header the server responds with 
             a 500 status code error message
- Technique: Use Postman or other similar testing software to make a POST request for the Signin API.
- Completion Criteria: Status Code 500 response received

## User Acceptance Testing

**Creation of Username and Password Credentials per User Appears in Database**
- Objective: Enter a valid username and password into the signup form and 
             the user is added to the database as a new user 
- Technique: The user enters a username and password and confirmation password.
             If the requirements are met then the password is encrypted into a 
             string and the encryption key and password are both saved into the db
             along with the username  
- Completion Criteria: New user record is created in the database's User table


## Integration Testing

**Frontend Signup API test, Username Less Than 8 Characters**
- Objective:
- Technique:
- Completion Criteria: The user receives an error message regarding the length of
                       the username needing to be at least 8 characters

**Frontend Signup API test, Username Greater Than or Equal to 8 Characters**
- Objective:
- Technique:
- Completion Criteria: The user does not receive an error message regarding the length
                       of the username

**Frontend Signup API test, Password Less Than 8 Characters**
- Objective: Test that the frontend react signup form will restrict users
             from being submitted to the signin api if they submit a password
             less than 8 characters in length
- Technique: Used an if statement to signal an error and displays an error message
             that the password is not long enough
- Completion Criteria: The user receives an error message regarding the length of
                       the password

**Frontend Signup API test, Password Greater Than or Equal to 8 Characters**
- Objective:
- Technique:
- Completion Criteria: The user does not receive an error message regarding the length
                       of the password

**Frontend Signup API test, Password Contains at least 1 Lowercase Character**
- Objective:
- Technique:
- Completion Criteria: The user does not receive an error message regarding the password
                       needing at least 1 lowercase character

**Frontend Signup API test, Password Does Not Contain at least 1 Lowercase Character**
- Objective:
- Technique:
- Completion Criteria: The user does receive an error message regarding the password
                       needing at least 1 lowercase character

**Frontend Signup API test, Password Contains at least 1 Uppercase Character**
- Objective:
- Technique:
- Completion Criteria: The user does not receive an error message regarding the password
                       needing at least 1 uppercase character

**Frontend Signup API test, Password Does Not Contain at least 1 Uppercase Character**
- Objective:
- Technique:
- Completion Criteria: The user does receive an error message regarding the password
                       needing at least 1 uppercase character

**Frontend Signup API test, Password Does Contain at Least 1 Non Letter Character**
- Objective:
- Technique:
- Completion Criteria: The user does not receive an error message regarding the password
                       needing at least 1 character that is not a letter

**Frontend Signup API test, Password Does Not Contain at Least 1 Non Letter Character**
- Objective:
- Technique:
- Completion Criteria: The user does receive an error message regarding the password
                       needing at least 1 character that is not a letter
**API Endpoint of 200, Landing Page, Sign Out Button Functions**
- Objective: Landing Page has an API endpoint of 200.
- Technique: Use Postman or other similar testing software to make a GET request for the Landing Page.
- Completion Criteria:

**API Endpoint of 200, Sign In Page, User is Authorized to Sign In**
- Objective: Landing Page has an API endpoint of 200.
- Technique: Use Postman or other similar testing software to make a GET request for the Sign In Page.
- Completion Criteria:

**API Endpoint of 401, Sign In Page, User is Unauthorized to Sign In due to Invalid Credentials**
- Objective: Sign In Page has an API endpoint of 401.
- Technique: Use Postman or other similar testing software to make a GET request for the Sign In Page.
- Completion Criteria:

**API Endpoint of 401, Sign Up Page, User is Unauthorized to Sign Up due to Duplicate Username**
- Objective: Sign Up Page has an API endpoint of 401.
- Technique: Use Postman or other similar testing software to make a GET request for the Sign Up Page.
- Completion Criteria:

**API Endpoint of 404, Landing Page, Page Not Found**
- Objective: Erroneous GET request is submitted.
- Technique: Use Postman or other similar testing software to make a GET request for the Landing Page.
- Criteria: 404 Error message is displayed.

## User Acceptance Testing
**Text Can Be Typed Into Text Boxes**
- Objective: Test to see if username and password text boxes function as necessary.
- Technique: Type into the text boxes to see if the username text appears as typed but  the password text box hides the text.
- Completion Criteria: Text appears correctly as it is typed.

**Content Appears on Each Page**
- Objective: Test to see if all content that's meant to appear to the user does appear on the front end. This includes the username of the user when they are signed into the Landing Page.
- Technique: Ensure after getting an API endpoint of 200 that all content appears on the front end.
- Completion Criteria: All content appears on the page as designated.

**All Buttons Function**
- Objective: Test to see if buttons (sign up, sign in, log out) function as designated.
- Technique: Click on the buttons (and after filling out the text boxes if necessary) to see if they take the user to the appropriate page.
- Completion Criteria: Buttons navigate user to the appropriate page.

**Invalid Credentials Message**
- Objective: When incorrect credentials are entered, an error message will appear.
- Technique: Enter in either a duplicate username, do not fulfill the username or password sign up requirements, or enter invalid credentials to see if the error message appears.
- Completion Criteria: Error message for invalid credentials appears for the user.

## Integration Testing
**Creation of Username and Password Credentials per User Appears in Database**
- Objective: Ensure creation of new username and password for a user appear in a database.
- Technique: Enter a generic username and password that fulfill the username and password requirements and see if that information is stored on the backend.
- Completion Criteria: Username and password information appear and are stored in the database.

# Responsibilities
John: Backend Development, Test Cases
Harshal: Frontend Development
Megan: Test Planning/Test Case Management

# Schedule
- 2/8/2022 => Started working on backend development
- 2/10/2022 => Started Working on Heroku backend Implementation
- 2/12/2022 => Created initial React app design
- 2/15/2022 => Finished Heroku backend Implmentation
- 2/18/2022 => Finished Frontend design
- 2/19/2022 => Began planning testing
- 2/21/2022 => Finished testing
