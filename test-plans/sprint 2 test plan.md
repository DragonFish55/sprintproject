# Introduction
## Team Z: Harshal Bhole, John Paglia, Megan Resurreccion
This is Team Z's Sprint 2 test plan. In sprint 2, we create an application that is a personal news feed that displays General news headlines when a user is signed out and allows for signed in users to customize news headlines. News headlines will be obtained from https://newsapi.org.

# Test Items
1. Home Page
2. Settings Page
3. News REST API
4. Heroku Database

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

# Approach
The team will use unit tests, test driven development, and document the appropriate test cases and test results. Unit tests will be done manually. Test cases will be meant to fail before committing the code to then test the appropriate feature. As the tests are run and the code is constructed, the application will slowly be closer to developed to what the sprint's goals are.

# Pass/Fail Criteria
The software application should function as intended whether a user is signed in or not to the application. A non-signed in user should be able to view the landing page with general news articles. A signed in user will be able to navigate the landing page according to their news preferences from the settings page (should they have selected any). When the settings page form is utilized, the Heroku database should update with that user's selections and the landing page should reflect that. There should not be any critical bugs affecting these functions. In addition the server should be able to respond to various types of status code errors.

# Testing Tasks

## Unit Testing
****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

## User Acceptance Testing

****
- Objective:
- Technique:
- Completion Criteria:

## Integration Testing

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Criteria:

## User Acceptance Testing
****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

****
- Objective:
- Technique:
- Completion Criteria:

## Integration Testing
****
- Objective:
- Technique:
- Completion Criteria:

# Responsibilities
John:

Harshal:

Megan: Test Planning

# Schedule
| Date | Task to Complete|
-------|-------------------
| 2/26/22 | Create sprint 2 test plan |
| 2/27/22 | Write up Unit Test cases |
| 2/28/22 | Write up remaining test cases |
| 3/21/22 | Finish testing |
