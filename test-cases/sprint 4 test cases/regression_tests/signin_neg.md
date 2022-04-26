### Test Case ID
signin_neg

### Description
Tests that when a user enters incorrect account credentials an error message pops up to say their credentials are invalid, rendering them from signing in.

### Test Steps
- Start up the app.
- When on the landing page, navigate to the Sign In button.
- Enter in incorrect login credentials from a created account.

### Pre-requisites
- Access to the app

### Author
Megan Resurreccion

### Test Method
Manual Regression

### Pass/Fail Criteria
Passes if the user enters incorrect credential information for an existing account or enters credentials for a non-existing account resulting in an error message being displayed. Fails if the user enters in correct login information and is directed to the home page.
