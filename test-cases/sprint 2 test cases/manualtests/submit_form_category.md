### Test Case Id: 
sub_form_cat

### Description:
Tests that the user can select none or multiple checkbox category values and after clicking the settings page form submit button the categories submitted to the api to be saved in the users account. The news for those categories is displayed on the landing page

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- Navigate to login page and login with a valid user if already created
- After being redirected to the landing page click the settings button to redirect to the settings page.
- Try choosing categories and after clicking submit they should be reflected on the landing page as news information and if so then the test passes.

### Pre-requisities
1. Landing Page
2. Signin Page
3. Signup Page
4. Settings Page

### Author
John Paglia

### Test Method
updateSettings

### Pass/Fail Criteria
Passes if the user can select checkbox categories and successfully submit the form to update the categories in their account. Otherwise the test fails.