### Test Case Id: 
gen_signup

### Description:
Tests that while the user enters a valid username and valid password a user account is logged in

### Test Steps
- run npm start 
- Navigate to http://localhost:3000/signin
- Enter username
- Enter password
- Click on signin button

### Pre-requisities
1. Landing Page
2. Signin Page
3. Signup Page

### Author
Harshal Bhole

### Test Method
checkApi

### Pass/Fail Criteria
Passes if username exists and password is correct and user is logged in
Otherwise the test fails.