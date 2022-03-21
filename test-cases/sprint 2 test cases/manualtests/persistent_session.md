### Test Case Id: 
prst_sess

### Description:
Tests that after logging in and creating a cookie in the browser after closing the browser and navigating back to the app the user is still logged in.

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- Navigate to signin page
- Login already existing user or create new one and then login
- After being redirected back to landing page and seeing you are logged in close the browser
- Once again open browser to 127.0.0.1:3000
- If the user is still logged in then the test succeeds

### Pre-requisities
1. Landing Page
2. Signin Page
3. Signup Page

### Author
John Paglia

### Test Method
checkSignin

### Pass/Fail Criteria
Passes if login session is persistent between browser sessions. Otherwise test fails.