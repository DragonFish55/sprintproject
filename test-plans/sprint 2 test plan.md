# Introduction
## Team Z: Harshal Bhole, John Paglia, Megan Resurreccion
This is Team Z's Sprint 2 test plan. In sprint 2, we create an application that is a personal news feed that displays General news headlines when a user is signed out and allows for signed in users to customize news headlines. News headlines will be obtained from https://newsapi.org.

# Test Items
1. Home Page
2. Settings Page
3. News Category REST API
4. Default Category API
5. Settings API
6. Signin API
7. Signup API
8. Cookie Addition 
9. Local Database

# Features to be Tested
1. Home Page Features
- Non-signed in users sees a list of articles that are from the General news category.
- Landing page has a link/button to refresh the articles.
- Signed in users can see and click a link/button that will take them to the Settings page.

2. Settings Page Features
- A form for signed in users to select news category preferences.
- A user can select all or no preferences
- When user submits the categories are updated in the database
- Non selected choices remove categories from the database on submit
- When user submits or cancels, it takes them back to the landing page.

3. News REST API
- GET request for retrieving new articles when no user is signed in. API response of 200 received.
- GET request for retrieving articles when a user is signed in. API response of 200 received.

4. Database
- Database updates with news category preferences.
- Existing user updates their news cateogry preferences.

# Approach
The team will use manual tests, unit tests, and test driven development tests, and document the appropriate test cases and test results. Test cases will be meant to fail before committing the code to then test the appropriate feature. As the tests are run and the code is constructed, the application will slowly be closer to developed to what the sprint's goals are.

# Pass/Fail Criteria
The software application should function as intended whether a user is signed in or not to the application. A non-signed in user should be able to view the landing page with general news articles. A signed in user will be able to navigate the landing page according to their news preferences from the settings page (should they have selected any). When the settings page form is utilized, the Heroku database should update with that user's selections and the landing page should reflect that. There should not be any critical bugs affecting these functions. In addition the server should be able to respond to various types of status code errors.

# Testing Tasks

## Unit Testing
**- Landing page has a link/button to refresh the articles.**
- Objective:
- Technique:
- Completion Criteria:

**- A form for signed in users to select news category preferences appears.
**
- Objective:
- Technique:
- Completion Criteria:

**- Signed in users can see and click a link/button that will take them to the Settings page.


## User Acceptance Testing

**- Signed in users can see and click a link/button on the landing page that will take them to the Settings page.
**
- Objective: Users can click on a settings button that will redirect them to the settings page 
- Completion Criteria: As long as the user is redirected to the settings page the test passes. Otherwise the test fails

**- Signed in users can click on any number of checkboxes on settings page and the categories are added to their account.
**
- Objective: Allow the user to add newsapi query categories to their account and at a later time query the newsapi for relevant data
- Completion Criteria: The user is redirected to the landing page and the updated user's categories are reflected on the data retrieved from the newsapi

**- Settings page displays list of checkboxes that the user can interact with 
**
- Objective: Checkboxes are properly displayed on the settings page
- Completion Criteria: The user is redirected to the landing page and the updated user's categories are reflected on the data retrieved from the newsapi

**- Non-signed in users sees a list of articles that are from the General news category.**
- Objective:
- Technique:
- Completion Criteria:

- At least one item on the form is selected and there is a way to cancel the changes.

- When user submits or cancels, it takes them back to the landing page.


## API Testing
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
