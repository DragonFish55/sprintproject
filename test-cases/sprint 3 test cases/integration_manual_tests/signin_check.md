### Test Case Id: 
signin_pass

### Description:
Tests that after logging into the signin page you are redirected to the
landing page where the username of the logged in user is displayed

### Test Steps 
- Start api by navigating to 127.0.0.1:3000
- Once you are on the landing page click the signin page to be redirected to the signin page
- Enter a valid username and password and click the Login button
- After being redirected to the mainpage if the username ois displayed on the page then the test is a success

### Pre-requisities
- App Component
- Landing Page Component
- Signin Component
- Redux

### Author
John Paglia

### Test Method
- checkLogin

### Pass/Fail Criteria
- If the username exists on the landing page after signin and redirect then the test is a success. Otherwise the test fails.