### Test Case Id: 
cat_sett_list_200

### Description:
Tests that given a valid username the list of all categproes saved in the user's account is returned

### Test Steps
- Start the backend flask server
- Send a postman request with a invalid username
- If a status code 200 and the list of user categories is returned the test passes

### Pre-requisities
1. Settings category api 

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if given a valid username the api returns a 200 status code and the list of categories in the users account. Otherwise the test fails.