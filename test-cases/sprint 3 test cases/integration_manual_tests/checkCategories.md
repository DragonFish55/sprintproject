### Test Case Id: 
chk_cat_sett

### Description:
Tests that while the user has multiple categories in their account, logged in,  and
while they are on the landing page with the home tab selected the news settings category api is queried and displays the most recent news articles across all those categories for up to 250 entries along with pagination. This also tests the link between the News data component page and the data sent down through the props parameter on the landing page.

### Test Steps 
- Start api by navigating to 127.0.0.1:3000
- Once you are on the landing page click the signin page to be redirected to the signin page
- Enter a valid username and password and click the Login button
- After being redirected to the mainpage click the settings button that is now visble
- After being redirected to the settings page select any amount of checkbox categories that are unchecked and then click submit
- After being redirected to the landing page the home tab should be selected and showing news articles.
- Click through all the article pages and if there are 25 pages with 10 articles per page all on the same type of categories in the user account then the test passes


### Pre-requisities
1. Landing Page
2. Settings Page
3. Signin Page

### Author
John Paglia

### Test Method
1. checkApi

### Pass/Fail Criteria
Passes if a a maximum of 250 articles are displayed on the landing page across all pages as well as recent articles related to the categories in the users settings. Otherwise the test fails.