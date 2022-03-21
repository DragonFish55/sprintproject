# Introduction
## Team Z: Harshal Bhole, John Paglia, Megan Resurreccion
This is Team Z's Sprint 2 test plan. In sprint 2, we create an application that is a personal news feed that displays General news headlines when a user is signed out and allows for signed in users to customize news headlines. News headlines will be obtained from https://newsapi.org.

# Test Items
1. Landing Page
2. Settings Page
3. News Category REST API
4. Default Category API
5. Settings API
6. Signin API
7. Signup API
8. Browser Cookies  
9. Local Database
10. Signout API
11. Signin Page
12. Signup Page

# Features to be Tested
1. Home Page Features
- Non-signed in users sees a list of articles that are from the General news category.
- Signed in users ca see related articles from the categories in their account or if they have none only the General category
- Landing page has a link/button to refresh the articles.
- Signed in users can see and click a link/button that will take them to the Settings page.

2. Settings Page Features
- A form for signed in users to select news category preferences.
- A user can select all or no preferences
- When user submits the form the categories are updated in the database
- Non selected choices remove categories from the database on submit if there are any
- When user submits it takes them back to the landing page.

3. News Categories API
- GET request for retrieving news articles when a user is signed in related to the categories in the users account. A reponse code of 200 is returned
- GET request for retrieving articles for responding with a string "None" when the user is not signed in. The default api is then queried for the General category news. A response code of 200 is returned. 
- GET request for retrieving a 401 when user does not exist

4. Default API 
- GET request for retrieving articles related to the default configuration for the type of newsapi entry you are requesting. 
- If the entry type is invalid a 401 error code is returned

5. Update Categories API
- GET request for submitting the categories selected using the settings checkboxes to your user account for use by the categories api. Returns 200 response code on success
- If the user does not exist then a 401 status code is returned

6. Database
- Database updates with news category preferences.
- Existing user updates their news cateogry preferences.

7. Signin Page
- Signin Page displays a form for the user to enter their username and password to login to their account.
- An invalid username or password will display an appropriate error message
- After successful login the user will be redirected to the landing page and can view a label with their name as well as a logout button and settings button

8. Signup Page
- Signup Page displays a form for the user to enter new account information consisting of a new username, password, as well as a password confirmation.
- Error messages will be displayed on incorrect submission of username and password
- On successful signup a message is displayed that the user account has been created

# Approach
The team will use manual tests, unit tests, and test driven development tests, and document the appropriate test cases and test results. For the unit tests including the test driven development tests the unit tests will be completed using the python unittest package. For test driven development test cases they are initially added after the previous sprint without adding any extra code and run so they will be meant to fail. Then after adding the new code the test driven unittests are run again before committing the code to then test the appropriate feature and obtain correct results. As the tests are run and the code is constructed, the application will slowly be closer to developed to what the sprint's goals are.

# Pass/Fail Criteria
The software application should function as intended whether a user is signed in or not to the application. A non-signed in user should be able to view the landing page with general news articles. A signed in user will be able to navigate the landing page according to their news preferences from the settings page (should they have selected any). When the settings page form is utilized, the Heroku database should update with that user's selections and the landing page should reflect that. There should not be any critical bugs affecting these functions. In addition the server should be able to respond to various types of status code errors.

# Testing Tasks

## Frontend
**- Landing Page Guest**
- Objective: Test that stimulates guest user viewing article list
- Completion Criteria: Landing page displays general articles and the login icon

**- Landing Page Refresh**
- Objective: Test that stimulates a user selecting the refresh button or link
- Completion Criteria: Landing page display user-preferred articles for users and general articles for guests

**- Landing Page Settings Button**
- Objective: Test that stimulates a logged-in user having access to user settings button
- Completion Criteria: Landing page display user-preferred articles and the setting icon

**- Settings Page Form**
- Objective: Test that displays the user's news preference form with several categories
- Completion Criteria: Settings page displays full preference form with a submit button

**- Form Item Selection**
- Objective: Test that shows that at least one item preference can be selected and there is an option to cancel the changes
- Completion Criteria: Form displays chosen items being selected.

**- Settings Submit/Cancel Button**
- Objective: Test that leads user from the settings page to the landing page from either the submit or cancel button.
- Completion: User successfully is navigated back to the landing page.

## Unit Testing

# Backend

### Python Unittest Package was used for all API testing ###

**- Signup API 401**
- Objective: Tests that given a username and password a new user will not be created because the
username already exists
- Completion Criteria: Data returned is a string value of "false" and a response code of 401 is
returned

**- Signup API 200**
- Objective: Tests that given a username that does not already exist a new user is added to the database 
- Completion Criteria: Data returned is a string value of "true" and a response code of 200

**- Signin API 401**
- Objective: Tests that simulates a user being deleted if they exist and then calling the signin api to test that a 401 error code was returned 
- Completion Criteria: A response code of 401 and true values for the user and password error values are returned. Signifying invalid user tried logging in.

**- Signin API 200**
- Objective: Test that simulates a user account being created and calling the signin api to test that it works
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

## User Acceptance Testing (Manual Testing)

**- Signed in users can see and click a link/button on the landing page that will take them to the Settings page.**
- Objective: Users can click on a settings button that will redirect them to the settings page
- Completion Criteria: As long as the user is redirected to the settings page the test passes. Otherwise the test fails

**- Signed in users can click on any number of checkboxes on settings page and the categories are added or removed from their account on clicking submit.
**
- Objective: Allow the user to add newsapi query categories to their account and at a later time query the newsapi for relevant data
- Completion Criteria: The user is redirected to the landing page and the updated user's categories are reflected on the data retrieved from the newsapi

**- Settings page displays list of checkboxes that the user can interact with**
- Objective: Checkboxes are properly displayed on the settings page
- Completion Criteria: The user is redirected to the landing page and the updated user's categories are reflected on the data retrieved from the newsapi

**- Non-signed in users sees a list of articles that are from the General news category.**
- Objective: As long as the user is not signed in and they are on the landing page the news api will only retrieve and display data from the general category
- Completion Criteria: On load of the landing page the user is not signed in and only general category data is retrieved from the api

**- The Settings page contains a form composed of multiple category buttons as well as a button to submit them**
- Objective: Landing page displays a settings button which will redirect them to the settings page as long as the are already logged in
- Completion Criteria: The user is redirected to the settings page on button click

**-  The Landing page contains a refresh button to retrieve newer api data for all possible categories**
- Objective: Rather than just refreshing the page every time the user can click a button to get new data and display the data on the landing page
- Completion Criteria: On button click new data for each category is retrieved from the newsapi endpoint and the data is updated on the landing page

## Integration Testing
- Database updates with news category preferences.
- Existing user updates their news category preferences.

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
| 3/1/22  | Finished converting code |
| 3/8/22  | Finished writing code |
| 3/21/22 | Finish testing |
