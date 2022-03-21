### Test Case Id: 
rfsh_tst

### Description:
Tests that on clicking the refresh button while the user is logged out or logged in the newsapi endpoint is queried for new relevant data based on either default on the saved categories

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- Click the refresh button and check the developer tools to see if data was retrieved

### Pre-requisities
1. Landing Page

### Author
John Paglia

### Test Method
checkApi

### Pass/Fail Criteria
Passes if whether logged in or logged out the data for the saved categories or default category are retrieved. Otherwise the test fails