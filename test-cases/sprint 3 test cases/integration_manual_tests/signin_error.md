### Test Case Id: 
signin_err

### Description:
Tests that if the username or password entered into the signin form upon clicking login are invalid the page displays an appropriate error message 

### Test Steps 
- Start api by navigating to 127.0.0.1:3000
- Once you are on the landing page click the signin page to be redirected to the signin page
- Enter an invalid username or password and click the Login button
- If error message(s) are visible on the page reelated to login error then the test is a success

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
- If while logging in the response from the api is an error and the error message is visible on the signin page the the test is a success. Otherwise the test fails.