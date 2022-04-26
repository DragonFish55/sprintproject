### Test Case Id: 
srch_op_paren

### Description:
Tests that given a valid search query containing parenthesis the api interprets the query correctly and responds with the requested data

### Test Steps
- Start the app on 127.0.0.1
- Enter a valid search query containing parenthesis
- If no error message is displayed the test passes

### Pre-requisities
1. Search everything api 
2. Landing Page

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if a no error message is displayed and articles are displayed. Otherwise the test fails
