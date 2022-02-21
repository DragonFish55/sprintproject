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
The software application should function as intended with a user having the ability to sign up, sign in, navigate to the landing page, log out, and then log in to the application. There should not be any critical bugs affecting these functions.

# Testing Tasks

## API Testing
**API endpoint of 200, Landing Page, Page Loads**
- Objective: Landing Page has an API endpoint of 200.
- Technique: Use Postman or other similar testing software to make a GET request for the Landing Page.
- Completion Criteria: Endpoint of 200 is received from the GET request.

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
Monday, February 21, 2022 - All items were tested throughout the day.
