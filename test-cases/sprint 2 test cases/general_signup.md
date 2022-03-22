### Test Case Id: 
gen_signup

### Description:
Tests that while the user enters a valid username and valid password a user account is created and is logged in 

### Test Steps
- run npm start 
- Navigate to http://localhost:3000/signup
- Enter username
- Enter and confirm password
- Click on signup button

### Pre-requisities
1. Landing Page
2. Signin Page
3. Signup Page

### Author
Harshal Bhole

### Test Method
checkApi

### Pass/Fail Criteria
Passes if username and password validation criteria is satisfied and user account is created
Otherwise the test fails.