### Test Case Id: 
sub_form_vis

### Description:
Tests after logging in and navigating to the settings page a form with several checkbox category values as well as a submit button are visible

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- Navigate to login page and login with a valid user if already created
- After being redirected to the landing page click the settings button to redirect to the settings page.
- If the form with the checkbox category values as well as the submit button are visible then the test passes

### Pre-requisities
1. Landing Page
2. Signin Page
3. Signup Page
4. Settings Page

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if the settings form and submit button are visible on the page after redirecting from the landing page after signin. Otherwise the test fails.