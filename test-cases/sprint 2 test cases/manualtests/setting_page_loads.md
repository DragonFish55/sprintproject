### Test Case Id: 
sett_load

### Description:
Tests that after clicking the settings button on the landing page the user is redirected to the settings page which exists and loads successfully

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- Navigate to login page and login with a valid user if already created
- After being redirected to the landing page click
the settings button which is now displayed to be redirected to the settings page
- If the settings page loads successfully the test passes

### Pre-requisities
1. Landing Page
2. Settings Page
3. Signin Page
4. Signup Page

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if user is redirected to an existing settings page on their app. Otherwise the test fails 