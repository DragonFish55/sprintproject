### Test Case Id: 
land_sign_in

### Description:
Tests that while the user is logged in the home page has a logout button as well as the username that was just signed in.

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- When the user arrives on the landing page click on the signin button
- Ater being redirected to the signin page enter a valid username and password
- After logging in and being redirected to the home page check if the username is visible on the page and the logout button is visible and he signin button is not visible. 

### Pre-requisities
1. Landing Page
2. Signin Page

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if while logged in the signin button is not visible, the username of the user who logged in is visible, and the logout button is visible on the main page. Otherwise the test fails.