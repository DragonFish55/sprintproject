### Test Case Id: 
cat_log

### Description:
Tests that after user login whenever user is on 
the landing page as loong as any categories exist in the user's account news for them are displayed on the landing page for each category

### Test Steps 
- Start api by navigating to 127.0.0.1:3000
- Navigate to login page and login with a valid user if already created
- After being redirected to the landing page click
the settings button to be redirected to the settings page
- Select at least one category checkboxe corresponding to which categories you wish to add to your account.
- Finally click submit to be redirected to the landing page and see if the news for each of the categories were displayed

### Pre-requisities
1. Landing Page
2. Settings Button 
3. Login Page
4. Signup Page
5. Settings Page
6. Settings form

### Author
John Paglia

### Test Method
1. checkApi

### Pass/Fail Criteria
Passes if user is redirected from the settings page to the landing page
and the newsapi categories are displayed on the landing page with the relevant 
news articles. Otherwise the test fails