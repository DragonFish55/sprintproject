### Test Case Id: 
query_cat_200_none

### Description:
Tests that given that the user is signed in and they have no categories 
in their account, the newsapi endpoint is not queried and "None" is returned
as well as a 200 status code. This signifies that the account existed however
no previous categories existed.  

### Test Steps
1. Create an account with a valid username and password
2. Make sure not to add categories for the new account
3. Call the "GET /api/<user>/getApiData" endpoint by providing the username that was created and if the returned data is "None" and a response code of 200 is returned the test passes

### Pre-requisities
1. Have a valid account created and user is logged in
2. Have no categories saved for the created user

### Author
John Paglia

### Test Method
getCategoryData

### Pass/Fail Criteria
Passes if the string "None" is returned from the function call along with 
response code 200. Otherwise the test fails