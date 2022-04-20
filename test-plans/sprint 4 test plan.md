# Introduction
## Team Z: Harshal Bhole, John Paglia, Megan Resurreccion
This is Team Z's Sprint 4 test plan. In sprint 4, we add a search bar that is able to search articles from the News API Everything endpoint and use advanced search features such as AND, NOT, and OR to filter through articles. This is the main feature that is added to the news application. We also make a few design changes as seen necessary, but otherwise focus on system testing.

# Test Items
1. Standard Landing Page
2. Customized Landing Page
3. Settings Page
4. Customized News Home Page API
5. News Category REST API
6. Default API
7. Update Categories API
8. Search API
9. Database
10. Tab Menu
11. Pagination
12. Single Category Tab
13. Home Link Tab
14. Search Box

# Features to be Tested

1. Customized Landing Page
- Signed-in users can see a navigation bar near the top of the page with a Home button and other news category buttons.
- The Home news button is on and highlighted by default and displays the user's setting preferences.
- Users that use the app can view recent relevant articles based on a single category regardless if they are logged in or not. If they are logged out then the home page news link displays only general news
- Signed-in users can view up to 250 recent news articles based on the categories in their account. If there are none then only general categories are displayed
- The list of articles will be supported by pagination so users can navigate sets of articles as opposed to endlessly scrolling through them.
- The buttons on the navigation bar will include the categories: Home, General, Business, Entertainment, Health, Science, Sports, Technology.
- Search text box is displlayed for entering search terms and supports advanced search capabilities.
- Usage of search text box will result in appropriate results being displayed in descending order starting with the most recent.

2. Settings Page
- A form for signed-in users to select news category preferences.
- A user can select all or no preferences
- When a user submits the form the categories are updated in the database and upon returning to the settings page for that user the categories submitted are checked on the checkboxes
- Non selected choices remove categories from the database on submit if there are any
- When a user submits the categories they are taken back to the landing page.

3. News Categories REST API
- GET request for retrieving news articles when a user is signed in related to the categories in the user's account. A response code of 200 is returned.
- GET request for retrieving articles for responding with a string "None" when the user is not signed in. The default api is then queried for the General category news. A response code of 200 is returned.
- GET request for retrieving a 401 when user does not exist.

4. Single Category API
- GET request for retrieving news articles for a given category. A response code of 200 is returned.

5. Default API
- GET request for retrieving articles related to the default configuration for the type of newsapi entry you are requesting.
- If the entry type is invalid a 401 error code is returned.

6. Update Categories API
- GET request for submitting the categories selected using the settings checkboxes to your user account for use by the categories api. Returns a 200 response code if successful.
- If the user does not exist then a 401 status code is returned.

7. Search API
- GET request for returning articles based on search criteria. Response code of 200 is returned.
- If no articles available, "no results" message is displayed and response code of 200 is still returned.

8. Database
- Database updates with news category preferences.
- Existing user updates their news category preferences.

# Approach
The team will use manual tests, test-driven development tests, unit tests, regression testing, and system testing, with a focus on **regression testing and system testing**. Appropriate test cases and test results will be documented. For the unit tests including the test-driven development tests the unit tests will be completed using the python unit test package for the backend. For test-driven development test cases they are initially added after the previous sprint without adding any extra code and run so they will be meant to fail. Then after adding the new code the test-driven unit tests are run again before committing the code to then test the appropriate feature and obtain correct results. For the integration tests they are completed manually among frontend features. For the regression test, each necessary feature and function will be tested to validate the entire application. As the tests are run and the code is constructed, the application will slowly be closer to development to what the sprint's goals are.

## About Regression Testing and System Testing
Regression/system testing is the primary focus of this sprint. As the final components of the project are completed, we will conduct regression testing to ensure there are no bugs in the code and ensure everything runs smoothly from the frontend. For testing techniques, we will likely select higher priority test cases (ones more necessary to overall functioning) and modification traversing test cases (ones that are effected by the new commits to the code). We will do testing manually, but the size of the system shouldn't make this too much of a disadvantage. In the end, we may end up selecting all test cases if time permits.

# Pass/Fail Criteria
The software application should function as intended whether a user is signed in or not to the application. A non-signed-in user should be able to view the landing page with general news articles. A signed-in user will be able to navigate the landing page, and according to their news preferences from the settings page (should they have selected any) view related articles. When the settings page form is utilized, the local Postgres database should update with that user's selections and the landing page should reflect that. There should not be any critical bugs affecting these functions. The user session is also persistent as well as the data and a session cookie is added to the user's browser on login. In addition, the server should be able to respond to various types of status codes. 

# Testing Tasks

## Regression Tests
Regression test can be tested manually.

**1. Sign Up**
- Objective: Non-signed in user can create an account.
- Completion Criteria: Message of successful account creation is displayed and account information is in the database.

**2. Sign In**
- Objective: User can sign in with their account.
- Completion Criteria: User is directed to the landing page upon entering their account credentials.

**3. Set Preferences**
- Objective: Signed in user can navigate to the settings page and select their news cateogry preferences.
- Completion Criteria: Setting preferences are still present upon submitting category preferences.

**4. Show Merged Articles**
- Objective: Home tab of the landing page shows the selected categorized articles from the user settings.
- Completion Criteria: User can browse articles on the home tab that are from their preferred categories, in descending order starting with the most recent.

**5. Show Category Articles**
- Objective: Selecting a category on the navigation tab will display articles from that category.
- Completion Criteria: User (signed in or not) can browse articles from the selected category in descending order starting with the most recent.

**6. Searching**
- Objective: Entering a search request in the searchbox will retrieve articles according to the specified request.
- Completion Criteria: Articles are returned upon entering a search box request.

## Manual Tests

**1. Search Box Function**
- Objective: User can use basic function (typing and submitting) of the search box.
- Completion Criteria: User can type basic search request, submit request, and have appropriate articles returned.

**2. Advanced Search Box Functions**
- Objective: User can use advanced search functions (AND, OR, NOT, parenthesis support) in the search box.
- Completion Criteria: User submits search request with advanced search functions and have appropriate articles returned.

**3. No Results From Search Message**
- Objective: When no results are applicable to search request, a "No results" message is displayed.
- Completion Criteria: Message is displayed to the user when no articles are available.

## API Tests

**1. Search Endpoint 200**
- Objective:
- Completion Criteria:

**2. Search Endpoint 401**
- Objective: 
- Completion Criteria: 

# Responsibilities
John: Backend Development and Backend Testing

Harshal: Front End Development

Megan: Test Planning, Frontend Testing

# Schedule
| Date | Task to Complete|
-------|-------------------
| 4/14 | Create sprint 4 test plan |
| 4/17 | Continue drafting sprint 4 test plan |

