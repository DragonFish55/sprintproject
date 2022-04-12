# Introduction
## Team Z: Harshal Bhole, John Paglia, Megan Resurreccion
This is Team Z's Sprint 3 test plan. In sprint 3, with the news feed application we created, we customized it with a navigation bar to allow logged in users to select a specific news category to browse news articles. There is now also pagination with the articles. News headlines are obtained from https://newsapi.org. The API will still retrieve the most recent news for each category however now after all of the news is retrieved the articles are sorted based on date and time among all possible articles and then limited to at most 250 articles displayed. The overall focus in this sprint is the use of integration tests.

# Test Items
1. Standard Landing Page
2. Customized Landing Page
3. Settings Page
4. Customized News Home Page API
5. News Category REST API
6. Default API
7. Update Categories API
8. Database

# Features to be Tested

1. Customized Landing Page
- Signed-in users can see a navigation bar near the top of the page with a Home button and other news category buttons.
- The Home news button is on and highlighted by default and displays the user's setting preferences.
- Users that use the app can view recent relevant articles based on a single category regardless if they are logged in or not. If they are logged out then the home page news link displays only general news
- Signed-in users can view up to 250 recent news articles based on the categories in their account. If there are none then only general categories are displayed
- The list of articles will be supported by pagination so users can navigate sets of articles as opposed to endlessly scrolling through them.
- The buttons on the navigation bar will include the categories: Home, General, Business, Entertainment, Health, Science, Sports, Technology.

2. Settings Page
- A form for signed-in users to select news category preferences.
- A user can select all or no preferences
- When a user submits the form the categories are updated in the database and upon returning to the settings page for that user the categories submitted are checked on the checkboxes
- Non selected choices remove categories from the database on submit if there are any
- When a user submits the categories they are taken back to the landing page.

3. Customized Home Page News API
- GET request for the user's preferred articles being returned is 200.
- GET request for retrieving a 401 when unauthorized user.
- GET request for returning articles from the descending order with the most recent first is 200.
- GET request for a limit of approximately 250 articles is 200.


5. News Categories REST API
- GET request for retrieving news articles when a user is signed in related to the categories in the user's account. A response code of 200 is returned.
- GET request for retrieving articles for responding with a string "None" when the user is not signed in. The default api is then queried for the General category news. A response code of 200 is returned.
- GET request for retrieving a 401 when user does not exist.

6. Default API
- GET request for retrieving articles related to the default configuration for the type of newsapi entry you are requesting.
- If the entry type is invalid a 401 error code is returned.

7. Update Categories API
- GET request for submitting the categories selected using the settings checkboxes to your user account for use by the categories api. Returns a 200 response code if successful.
- If the user does not exist then a 401 status code is returned.

8. Database
- Database updates with news category preferences.
- Existing user updates their news category preferences.

# Approach
The team will use manual tests, test-driven development tests, and unit tests. Appropriate test cases and test results will be documented. For the unit tests including the test-driven development tests the unit tests will be completed using the python unit test package. For test-driven development test cases they are initially added after the previous sprint without adding any extra code and run so they will be meant to fail. Then after adding the new code the test-driven unit tests are run again before committing the code to then test the appropriate feature and obtain correct results. As the tests are run and the code is constructed, the application will slowly be closer to development to what the sprint's goals are.

# Pass/Fail Criteria
The software application should function as intended whether a user is signed in or not to the application. A non-signed-in user should be able to view the landing page with general news articles. A signed-in user will be able to navigate the landing page, and according to their news preferences from the settings page (should they have selected any) view related articles. When the settings page form is utilized, the local Postgres database should update with that user's selections and the landing page should reflect that. There should not be any critical bugs affecting these functions. The user session is also persistent as well as the data and a session cookie is added to the user's browser on login. In addition, the server should be able to respond to various types of status codes.

# Integration Manual Testing Tasks

**1. Sign Into Account Check**
- Objective: When user signs into their account they are redirected to the landing page where their username is displayed on the header component
- Completion Criteria: Username is visible on landing page header component after being redirected from login page

**2. Add Categories**
- Objective: User can select categories to add to their account using the checkboxes and after being redirected to the landing page and then returning to the settings page the categories are still checked. 
- Completion Criteria: The categories submitted to the update settings api are added to the users account and the getCategoryList function queries the backend api to automatically update the checkboxes.

**3. Remove Categories**
- Objective: User can unselect news categories that were previously on their account using the checkboxes in the settings form. After submitting and being redirected to the landing page and then returning to the settings page, the categories are no longer checked. 
- Completion Criteria: The categories unchecked and submitted to the update settings api are removed from the users account and the getCategoryList function queries the backend api to automatically update the checkboxes.

**4. Check Single Category**
- Objective: User can click on one of the category tabs and that tab becomes highlighted. News article under that category are also displayed with pagination.
- Completion Criteria: Single category API returns news articles relevant to the news cateogry selected.

**5. Check Multiple Categories**
- Objective: User with multiple news categories selected in preferences has a list of articles queried on their home page in the most recent order, with up to 250 articles along pagination. Home tab is also selected.
- Completion Criteria: Maximum of 250 relevant news category articles are displayed on the landing page in the most recent order.

**5. Sign In Error**
- Objective: Tests that given an invalid username and/or password on the signin page that an appropriate error message is displayed.
- Completion Criteria: API response is an error and error message is visible on the signin page.

**7. Pagination**
- Objective: User can toggle between sets of articles with pagination.
- Completion Criteria: Passes if sets of articles are consistent between pages on the landing page.

# Manual Testing Tasks

**1. Category Settings Status 200**
- Objective: Tests whether the user's preferred news categories are saved into the account.
- Completion Criteria: API returns 200 response code and correct news articles are shown to the corresponding user account.

**2. Category Settings Status 401**
- Objective: Tests whether a 401 status code and "None" are returned when an invalid username is inputted.
- Completion Criteria: API returns a 401 response code.

**3. Listed Categories Status 200**
- Objective: Tests whether a list of all the preferred categories in an account is saved when given a valid username.
- Completion Criteria: API returns a status of 200 and the list of category preferences is displayed.

**4. Listed Categories Status 401**
- Objective: Tests whether a a status code of 401 and "None" is returned when an invalid username is inputted.
- Completion Criteria: API returns a status of 401 with invalid username.

**5. Landing Page General New–Logged In**
- Objective: Tests whether a new user (or user with no categories selected) only has general news articles displayed and queried.
- Completion Criteria: Only information displayed on the landing page is news from the newsapi's general category articles.

**6. Landing Page General News–Logged Out**
- Objective: Tests whether while no user is logged in that the home page displayed only general news articles.
- Completion Criteria: While logged out, only information displayed on the landing page is newsapi's general category articles.

**7. Landing Page Navigation Bar**
- Objective: The landing page has the navigation bar with news categories displayed.
- Completion Criteria: Each newsapi category in addition to home is visible on the home page. Home is selected initially.

**8. Single Category Status 200**
- Objective: Tests whether relevant news articles are returned when a single category is selected.
- Completion Criteria: API returns a response code of 200 and returns corresponding news category articles.

# Responsibilities
John: Backend Development and Backend Testing

Harshal: Front End Development

Megan: Test Planning, Frontend Testing, Frontend Re-Designing

# Schedule
| Date | Task to Complete|
-------|-------------------
| 3/23/22 | Create sprint 3 test plan |
| 4/2/22  | Finished Custom Landing Page News |
| 4/6/22  | Finished Pagination |
| 4/8/22  | Started testing |
| 4/11/22 | Finished testing |
