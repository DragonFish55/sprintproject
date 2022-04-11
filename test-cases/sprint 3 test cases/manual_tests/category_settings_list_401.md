### Test Case Id: 
cat_sett_list_401

### Description:
Tests that given an invalid username a 401 status code is returmed as well as data being "None"

### Test Steps
- Start the backend flask server
- Send a postman request with a invalid username
- If a status code 401 is returned the test passes

### Pre-requisities
1. Settings category api 

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if given an invalid username the api returns status code 401