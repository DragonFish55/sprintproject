### Test Case Id: 
sett_but_vis

### Description:
Tests after logging in a settings button that redirects the user to the settings page is visible on the landing page and not visible if the user is not logged in

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- Navigate to login page and login with a valid user if already created
- After being redirected to the landing page if the settings button is visible then the test passes

### Pre-requisities
1. Landing Page
2. Signin Page
3. Signup Page

### Author
John Paglia

### Test Method
checkSignin

### Pass/Fail Criteria
Passes if the settings button is visible on the landing page after the user logs in to their account. The test fails otherwise 