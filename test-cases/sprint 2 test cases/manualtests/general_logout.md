### Test Case Id: 
gen_logout

### Description:
Tests that while the user is logged out the landing page displays information only from the general category

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- Login existing user or create new one
- Navigate to settings page to update categories
- After submitting categories and returning to landing page the news for all categories you submitted should be visible
- Finally logout and check if the only news you see is from the general category

### Pre-requisities
1. Landing Page
2. Signin Page
3. Signup Page
4. Settings Page

### Author
John Paglia

### Test Method
checkApi

### Pass/Fail Criteria
Passes if while logged out the only information displayed on the landing
page from newsapi is from the general category. Otherwise the test fails.