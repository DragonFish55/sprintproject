# Introduction
## Team Z: Harshal Bhole, John Paglia, Megan Resurreccion
This is Team Z's Sprint 3 test plan. In sprint 3, with the news feed application we created, we customized it with a navigation bar to allow logged in users to select a specific news category to browse news articles of. There is now also pagination with the articles. News headlines are obtained from https://newsapi.org. The API used to retrieve news articles will also be improved to show news articles in descending order starting with the most recent, and limits it to approximately 250 articles. The overall focus in this sprint is the use of integration tests.

# Test Items
1. Standard Landing Page
2. Customized Landing Page
3. Settings Page
4. 15. Customized News Home Page API
5. News Category REST API
6. Default API
7. Update Categories API
8. Database

# Features to be Tested
1. Standard Landing Page
- Non-signed in users sees a list of articles that are from the General news category.
- Landing page has a link/button to refresh the articles.
- The list of articles will be supported by pagination so users can navigate sets of articles as opposed to endlessly scrolling through them.

2. Customized Landing Page
- Signed in users can see related articles from the categories in their account or if they have none only the General category
- Signed in users can see and click a link/button that will take them to the Settings page.
- The list of articles will be supported by pagination so users can navigate sets of articles as opposed to endlessly scrolling through them.
- Signed in users can see a navigation bar near the top of the page with a Home button and other news category buttons.
- The buttons on the navigation bar will include the categories: Home, General, Business, Entertainment, Health, Science, Sports, Technology.
- The Home button is on and highlighted by default via the user's setting preferences.

2. Settings Page
- A form for signed in users to select news category preferences.
- A user can select all or no preferences
- When user submits the form the categories are updated in the database
- Non selected choices remove categories from the database on submit if there are any
- When user submits it takes them back to the landing page.

4. Customized Home Page News API
- GET request for user's preferred articles being returned is a 200.
- GET request for returning articles from the descending order with the most recent first is 200.
- GET request for a limit of approximately 250 articles is 200.
- GET request for retrieving a 401 when unauthorized user.

5. News Categories REST API
- GET request for retrieving news articles when a user is signed in related to the categories in the users account. A response code of 200 is returned.
- GET request for retrieving articles for responding with a string "None" when the user is not signed in. The default api is then queried for the General category news. A response code of 200 is returned.
- GET request for retrieving a 401 when user does not exist.

6. Default API
- GET request for retrieving articles related to the default configuration for the type of newsapi entry you are requesting.
- If the entry type is invalid a 401 error code is returned.

7. Update Categories API
- GET request for submitting the categories selected using the settings checkboxes to your user account for use by the categories api. Returns 200 response code on success
- If the user does not exist then a 401 status code is returned.

8. Database
- Database updates with news category preferences.
- Existing user updates their news category preferences.

# Approach
The team will use manual tests, unit tests, test driven development tests, , and unit tests. Appropriate test cases and test results will be documented. For the unit tests including the test driven development tests the unit tests will be completed using the python unittest package. For test driven development test cases they are initially added after the previous sprint without adding any extra code and run so they will be meant to fail. Then after adding the new code the test driven unittests are run again before committing the code to then test the appropriate feature and obtain correct results. As the tests are run and the code is constructed, the application will slowly be closer to developed to what the sprint's goals are.

# Pass/Fail Criteria
The software application should function as intended whether a user is signed in or not to the application. A non-signed in user should be able to view the landing page with general news articles. A signed in user will be able to navigate the landing page, and according to their news preferences from the settings page (should they have selected any) view related articles. When the settings page form is utilized, the local postgres database should update with that user's selections and the landing page should reflect that. There should not be any critical bugs affecting these functions. The user session is also persistent as well as the data and a session cookie is added to the user's browser on login. In addition the server should be able to respond to various types of status codes.

# Testing Tasks

## Frontend
**- **
- Objective:
- Completion Criteria:

# Backend

### Python Unittest Package methodology  was used for all API testing ###

**- **
- Objective:
- Completion Criteria:


## User Acceptance Testing (Manual Testing)

**- **
- Objective:
- Completion Criteria:


## Integration Testing
**- **
- Objective:
- Completion Criteria:

# Responsibilities
John: Backend Development and Backend Testing

Harshal: Front End Development

Megan: Test Planning and Frontend Testing

# Schedule
| Date | Task to Complete|
-------|-------------------
| 3/23/22 | Create sprint 3 test plan |
|  |  |
|  |  |
|  |  |
|  |  |
|  |  |
