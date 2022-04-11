### Test Case Id: 
sng_cat_quer_200

### Description:
Tests that given a category the api returns relevant news articles for that single category as well as status code 200

### Test Steps
- Start the backend flask server
- Send a postman request with a chosen category as a rest parameter
- If the response is a status code 200 and the categpries news articles the
test passes

### Pre-requisities
1. Single Category API

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if given a category the api returns relevant news articles