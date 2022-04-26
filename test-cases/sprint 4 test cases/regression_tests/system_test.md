### Test Case ID
main_regress

### Description
Full test of all system features including negative test cases. Teh tests are all run in order.

### Test Steps
- Start up the app.
- Navigate to the signup page
- Enter invalid username and password.
- Check to see if an error message appears
- Now enter correct user credentials for a new user
- If success message appears test passes
- Next click the signin button to go to signin page
- Enter invalid user credentials and then click login button
- If error message appears then test passes
- Next entera valid user's credentials and then click the login button.
- If user is redirected to the landing page test passes.
- Next click the settings button which redirects you to the settings page
- Have no checkboxes selected then click submit.
- If an error message appears test passes
- Next click any number of checkboxes and click submit.
- After you are redirected to the landing page click the settings page once again to return to the settings page and if the same checkboxes you submitted are checked the test passes.
- Next navigate to the landing page again and if the list of merged settings categories are displayed the test passes
- Click on one of the single cateogory tabs, "health" for instance and if the health articles are queried and displayed the test passes
- Next use the new search box and enter a word like "game" and if articles for the "game" category are displayed the test passes
- Next use the search box to query an advanced topic "game AND home". If articles are displayed the test passes.
- Finally enter an invalid advanced query and a query that shows no results and check to see if the error messages appears. If so the system test passes completely 

### Pre-requisites
- Landing Page 
- Signup Page
- Signin Page
- Settings Page

### Author
John Paglia

### Test Method
Manual Regression

### Pass/Fail Criteria
Passes if full system test passes