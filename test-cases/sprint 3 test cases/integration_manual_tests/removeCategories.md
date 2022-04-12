### Test Case Id: 
cat_rem_chk

### Description:
Tests that the user can uncheck checkbox values for categories that are already saved in the user's account and after submitting the form the categories are removed from the user's account. Then the user is redirected to landing page where that category news has been removed in the home tab. After returning to the settings page the checkboxes will show that the categories were removed.

### Test Steps 
- Start api by navigating to 127.0.0.1:3000
- Once you are on the landing page click the signin page to be redirected to the signin page
- Enter a valid username and password and click the Login button
- After being redirected to the mainpage click the settings button that is now visble after checking that the home tab now no longer shows the same category type as the one you removed
- After being redirected to the select any checkboxes that are already checked
to uncheck them then click submit form button
- After being redirected to the landing page once again click the settings button
- Finally if after you have arrived on the settings page and the checkboxes that you have just unchecked are still unchecked then the test is a success

### Pre-requisities
1. Landing Page
2. Settings Page
3. Signin Page

### Author
John Paglia

### Test Method
getCategoryList

### Pass/Fail Criteria
Passes if the categories retrieved from the users account from the backend api are the same categories that were submitted to the api indicating that the categories unchecked were removed from the account. Otherwise the test fails.
