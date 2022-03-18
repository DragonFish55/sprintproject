### Test Case Id: 
query_cat_200_exists

### Description:
Tests that given that the user is signed in and they have categories 
in their account that were previously added the newsapi endpoint
is queried for each of those categories. 

### Test Steps
1. Create an account with a valid username and password
2. Call the GET /api/<user>/getApiData endpoint by providing the username that was created and if the json data and a response code of 200 is returned the test passes

### Pre-requisities
1. Have a valid account created and user is logged in
2. Have at least one category stored in the database to query

### Author
John Paglia

### Test Method
getCategoryData

### Pass/Fail Criteria
Passes if json newsapi data for each category is returned successfully from the function call. Otherwise the test fails