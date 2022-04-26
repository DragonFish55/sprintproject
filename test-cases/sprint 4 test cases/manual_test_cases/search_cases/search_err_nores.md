### Test Case Id: 
srch_err_nores

### Description:
Tests that given a search query if the search everything api finds no results an error message is displayed that says no results found.

### Test Steps
- Start the app on 127.0.0.1
- Enter a search query into the search box that will show no results. 
- If an error message is displayed the test passes

### Pre-requisities
1. Search everything api 
2. Landing Page

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if a no results error message is displayed. Otherwise the test fails
