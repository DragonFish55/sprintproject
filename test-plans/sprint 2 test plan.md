# Introduction
## Team Z: Harshal Bhole, John Paglia, Megan Resurreccion
This is Team Z's Sprint 2 test plan. In sprint 2, we create an application that is a personal news feed that displays General news headlines when a user is signed out and allows for signed in users to customize news headlines. News headlines will be obtained from https://newsapi.org.

# Test Items
1. Home Page
2. Settings Page
3. NewsApi REST API endpoints
4. Local Postgres Database
5. Signin Api
6. Signup Api
7. Settings Api
8. Cookie Parameter
9. Response Codes
10. Logout Api


# Features to be Tested
1. Home Page Features
- Non-signed in users sees a list of articles that are from the General news category.
- Landing page has a link/button to refresh the articles.
- Signed in users can see and click a link/button that will take them to the Settings page.

2. Settings Page Features
- A form for signed in users to select news category preferences.
- At least one item on the form is selected and there is a way to cancel the changes.
- When user submits or cancels, it takes them back to the landing page.

3. News REST API
- GET request for retrieving new articles when no user is signed in. API response of 200 received.
- GET request for retrieving articles when a user is signed in. API response of 200 received.

4. Database
- Database updates with news category preferences.
- Existing user updates their news cateogry preferences.

# Approach
The team will use unit tests, test driven development, and document the appropriate test cases and test results. Unit tests will be done manually. Test cases will be meant to fail before committing the code to then test the appropriate feature. As the tests are run and the code is constructed, the application will slowly be closer to developed to what the sprint's goals are.

# Pass/Fail Criteria
The software application should function as intended whether a user is signed in or not to the application. A non-signed in user should be able to view the landing page with general news articles. A signed in user will be able to navigate the landing page according to their news preferences from the settings page (should they have selected any). When the settings page form is utilized, the Heroku database should update with that user's selections and the landing page should reflect that. There should not be any critical bugs affecting these functions. In addition the server should be able to respond to various types of status code errors.

# Testing Tasks

## Unit Testing

# Frontend



# Backend

**- Signup API 401**
- Objective: Test that given a username and password will not create a new user because the
user already exists
- Completion Criteria: data returned is a string value of "false" and a response code of 401 is
returned

**- Signup API 200**
- Objective: Test 
- Completion Criteria:

**- Signin API 401**
- Objective: Test that simulates a user being deleted if they exist and calling the signin api to test that a 401 error code was returned
- Completion Criteria: A response code of 401 and true values for the user and password error values that are returned. Signifying invalid user tried logging in

**- Signin API 200**
- Objective: Test that simulates a user account being created and
alling the signin api to test that it works
- Completion Criteria: A response code of 200 and a value of false
for the user and password errora indicating valid user and password

**- Query Categories API 401**
- Objective: Test 
- Completion Criteria:

**- Query Categories API 200 None**
- Objective: Test 
- Completion Criteria:

**- Query Categories API 200 Exists**
- Objective: Test 
- Completion Criteria:

**- Update Categories API 401**
- Objective: Test 
- Completion Criteria:

**- Update Categories API 200 Add**
- Objective: Test 
- Completion Criteria:

**- Update Categories API 200 Remove**
- Objective: Test 
- Completion Criteria:

**- Default Categories API 200**
- Objective: Test 
- Completion Criteria:

**- Default Categories API 401**
- Objective: Test 
- Completion Criteria:

**- A form for signed in users to select news category preferences appears.
**
- Objective:
- Technique:
- Completion Criteria:

**- Signed in users can see and click a link/button that will take them to the Settings page.


## User Acceptance Testing

**- Signed in users can see and click a link/button that will take them to the Settings page.
**
- Objective: Landing page displays a settings button which will redirect them to the settings page as long as the are already logged in
- Completion Criteria: The user is redirected to the settings page on button click

**- Non-signed in users sees a list of articles that are from the General news category.**
- Objective: As long as the user is not signed in and they are on the landing page the news api will only retrieve and display data from the general category
- Completion Criteria: On load of the landing page the user is not signed in and only general ctaegory data is retrieved from the api

**- The Settings page contains a form composed of multiple category buttons as well as a button to submit them
**
- Objective: Landing page displays a settings button which will redirect them to the settings page as long as the are already logged in
- Completion Criteria: The user is redirected to the settings page on button click

**-  The Landing page contains a refresh button to retrieve newer api data for all possible categories
**
- Objective: Rather than just refreshing the page every time the user can click a button to get new data and display the data on the landing page
- Completion Criteria: On button click new data for each category is retrieved from the newsapi endpoint and the data is updated on the landing page


## API Testing

- GET request for updating user category settings when no user is signed in. 
- GET request for retrieving articles when a user is signed in. API response of 200 received.- GET request for retrieving new articles when no user is signed in. API response of 200 received.
- GET request for retrieving articles when a user is signed in. API response of 200 received.- GET request for retrieving new articles when no user is signed in. API response of 200 received.
- GET request for retrieving articles when a user is signed in. API response of 200 received.
- GET request for retrieving new articles when no user is signed in. API response of 200 received.
- GET request for retrieving articles when a user is signed in. API response of 200 received.

## Integration Testing
- Database updates with news category preferences.
- Existing user updates their news cateogry preferences.

# Responsibilities
John: Backend Development and Backend Testing

Harshal: Front End Development

Megan: Test Planning and Frontend Testing

# Schedule
| Date | Task to Complete|
-------|-------------------
| 2/26/22 | Create sprint 2 test plan |
| 2/27/22 | Write up Unit Test cases |
| 2/28/22 | Write up remaining test cases |
| 3/21/22 | Finish testing |
