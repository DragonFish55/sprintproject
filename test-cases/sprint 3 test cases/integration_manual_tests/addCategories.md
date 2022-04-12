### Test Case Id: 
cat_add_chk

### Description:
Tests that the user can submit checkbox values for categories to be saved 
in their account. Then the user is redirected to landing page where that category news is displaued in the home tab. After returning to the settings page the same saved categories are displayed checked in the checkboxes where you can uncheck and submit later to remove

### Test Steps 
- Start api by navigating to 127.0.0.1:3000
- Once you are on the landing page click the signin page to be redirected to the signin page
- Enter a valid username and password and click the Login button
- After being redirected to the mainpage click the settings button that is now visble
after making sure the home tab displays the new article type
- After being redirected to the settings page select any amount of checkbox categories that are unchecked and then click submit
- After being redirected to the landing page once again click the settings button
- Finally if after you have arrived on the settings page the settings you submitted are checked then the test succeeds

### Pre-requisities
1. Landing Page
2. Settings Page
3. Signin Page

### Author
John Paglia

### Test Method
getCategoryList

### Pass/Fail Criteria
Passes if the categories retrieved from the users account from the backend api are the same categories that were submitted using the checkbox form. Otherwise the test fails.