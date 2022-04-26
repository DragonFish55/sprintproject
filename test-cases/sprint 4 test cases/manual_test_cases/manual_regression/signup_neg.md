### Test Case ID
signup_neg

### Description
Negative test that tests if a user enters username and/or password credentials that don't meet the app requirements then the appropriate error messages will pop up.

### Test Steps
- Start up the app (front and back ends)
- Once on the home page navigate to the Sign In button.
- Click the Sign Up button to naigate to the signup page.
- Enter a password that doesn't contain an uppercase character and a username that is less than 8 characters
- Click signup button and if error messages appear for both username and password then the test passes.

### Pre-requisites
- Signup Page
- Landing Page
- Signup API

### Author
Megan Resurreccion

### Test Method
Manual Regression

### Pass/Fail Criteria
Passes if the appropriate error messages pop up for each error being tested.
Otherwise the test fails
