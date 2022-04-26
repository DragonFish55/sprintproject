### Test Case Id: 
srch_err_invalid

### Description:
Tests that given an invalid search query format the api returns an invalid response and an error message is displayed

### Test Steps
- Start the app on 127.0.0.1
- Enter a invalid search query
- If an error message is displayed then the test passes

### Pre-requisities
1. Search everything api 
2. Landing Page

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if an error message is displayed indicating the query was invalid. Otherwise the test fails
