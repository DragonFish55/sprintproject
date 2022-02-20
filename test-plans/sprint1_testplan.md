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
- Objective:
- Technique:
- Completion Criteria:

**API Endpoint of 200, Sign In Page, User is Authorized to Sign In**
- Objective:
- Technique:
- Completion Criteria:

**API Endpoint of 401, Sign In Page, User is Unauthorized to Sign In due to Invalid Credentials**
- Objective:
- Technique:
- Completion Criteria:

**API Endpoint of 401, Sign Up Page, User is Unauthorized to Sign Up due to Duplicate Username**
- Objective:
- Technique:
- Completion Criteria:

## User Acceptance Testing


## Integration Testing
**Creation of Username and Password Credentials per User Appears in Database**
- Objective:
- Technique:
- Completion Criteria:

# Responsibilities
John: Backend Development
Harshal: Frontend Development
Megan: Test Planning/Test Case Management

# Schedule
