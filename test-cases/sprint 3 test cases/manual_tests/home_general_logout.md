### Test Case Id: 
land_home_gen_logout

### Description:
Tests that while the user is logged out and the home page tab is selected only general news is queried

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- If the home page tab is selected, the user is logged out, and only general news is displayed then the test succeeds. 

### Pre-requisities
1. Landing Page

### Author
John Paglia

### Test Method
checkApi

### Pass/Fail Criteria
Passes if while logged out the only information displayed on the landing
page for the home tab from newsapi is from the general category. Otherwise the test fails.