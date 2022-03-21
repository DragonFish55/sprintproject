### Test Case Id: 
log_ck_del

### Description:
Tests that after clicking the logout button the user is redirected to the landing page
and the cookie held by the browser is removed

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- Navigate to login page and login with a valid user if already created
- After being redirected to the landing page make sure cookie was added to the browser and then click the logout button
- After you are logged out check once again and if the cookie is no longer there then the test passes

### Pre-requisities
1. Landing Page
2. Signin Page
3. Signup Page

### Author
John Paglia

### Test Method
checkLogout

### Pass/Fail Criteria
Passes if on clicking logout button the user is successfully logged out and the cookie is removed from the browser. Otherwise the test fails