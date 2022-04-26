### Test Case Id: 
search_200

### Description:
Tests that given a search query the search everything api returns data to the user from newsapi 

### Test Steps
- Start the backend flask server
- Send a postman request with a valid search query to search everything endpoint
- If a response is returned either including some or no results then the test succeeds

### Pre-requisities
1. Search everything api 

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if given a valid search a status code 200 is returned as well as either some or no data. Otherwise the test fails