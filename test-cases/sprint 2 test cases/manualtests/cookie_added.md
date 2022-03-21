### Test Case Id: 
cookie_log

### Description:
Tests that after login a cookie is added to the browser that
will keep track of the username so the session is persistent 

### Test Steps 
- Start api by navigating to 127.0.0.1:3000
- Navigate to login page and login with a valid user if already created
- After being redirected to the landing page check the browser and if the "username" cookie is there with the correct username then the test passes

### Pre-requisities
1. Landing Page
2. Signin Page
3. Signup Page

### Author
John Paglia

### Test Method
checkCookies

### Pass/Fail Criteria
Passes if after the user login the browser saves the session cookie and the session
is then persistent. Otherwise the test fails.