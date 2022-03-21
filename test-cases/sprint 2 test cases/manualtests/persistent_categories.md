### Test Case Id: 
prst_cat

### Description:
Tests that after user updates categories in their account and then logs out of
account, when they log in once again the categories are still in the account

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- Navigate to signup page
- Create new user and then navigate to signin page
- Login new user
- Navigate to settings page
- Select any number of categories using the checkboxes and then click the submit button
- After being redirected check to see if the landing page displays the categories
- If so logout then login once again. If the landing page displays the same category news then the test is a success.

### Pre-requisities
1. Landing Page
2. Signin Page
3. Signup Page
4. Setting Page
5. Setting Button
6. Logout Button
7. Setting Update Form

### Author
John Paglia

### Test Method
updateSettings

### Pass/Fail Criteria
Passes if the categories added to the users account are persistent between sessions