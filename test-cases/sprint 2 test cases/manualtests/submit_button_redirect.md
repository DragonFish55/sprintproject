### Test Case Id: 
sub_redir

### Description:
Tests that on clicking the settings form submit button the user redirects to the landing page

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- Navigate to login page and login with a valid user if already created
- After being redirected to the landing page click
the settings button to be redirected to the settings page
- Finally click submit button on the settings page form and if you are redirected to the landing page then the test passes

### Pre-requisities
1. Landing Page
2. Settings Page
3. Signin Page
4. Signup Page

### Author
John Paglia

### Test Method
updateSettings

### Pass/Fail Criteria
Passes if after submitting the settings the user is redirected to the landing page. Otherwise the test fails.