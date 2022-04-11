### Test Case Id: 
cat_sett_api_401

### Description:
Tests that given an invalid username a 401 status code and "None" for data is returned rather than the newsapi data

### Test Steps
- Start the backend flask server
- Send a postman request with an invalid username

### Pre-requisities
1. Settings category api 

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if given an invalid username the api returns a 401 status code