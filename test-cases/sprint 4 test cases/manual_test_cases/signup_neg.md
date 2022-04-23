### Test Case ID
signup_neg

### Description
Negative test that tests if a user enters username and/or password credentials that don't meet the app requirements then the appropriate error messages will pop up.

### Test Steps
- Start up the app (front and back ends)
- Once on the home page navigate to the Sign In button.
- Click the Sign Up button to create an account.
- Enter a set of credentials that purposefully won't pass the app requirements such as not enough characters, passwords not matching, or the password doesn't contain an uppercase character and/or non-alphabetic character.
- Once entered, click Sign Up.

### Pre-requisites
- Access to the app

### Author
Megan Resurreccion

### Test Method
Manual Regression

### Pass/Fail Criteria
Passes if the appropriate error messages pop up for each error being tested (not enough characters, need of an additional type of character, mismatched passwords). If signup is immediately successful the test fails.
