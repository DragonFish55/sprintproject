### Test Case Id: 
land_home_gen_login

### Description:
Tests that while the user is logged in and the user has no categories in their account and the home page tab is selected only general news is queried

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- Navigate to signup page
- Create new user and then navigate to signin page
- Login new user
- Check whether the only category news on the landing page is from the general category while you are logged in

### Pre-requisities
1. Landing Page
2. Signin Page
3. Signup Page

### Author
John Paglia

### Test Method
checkApi

### Pass/Fail Criteria
Passes if while logged in the only information displayed on the landing
page for the home tab from newsapi is from the general category. Otherwise the test fails.