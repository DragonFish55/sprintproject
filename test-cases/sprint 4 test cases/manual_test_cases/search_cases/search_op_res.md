### Test Case Id: 
srch_op_res 

### Description:
Tests that given a valid search query containing operators such as AND, OR, or NOT return valid data results and no error message is displayed

### Test Steps
- Start the app on 127.0.0.1
- Enter a valid search query containing operators and no parenthesis
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
