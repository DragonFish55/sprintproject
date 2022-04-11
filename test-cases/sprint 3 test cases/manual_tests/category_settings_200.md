### Test Case Id: 
cat_sett_api_200

### Description:
Tests that given a valid user the news articles related to all of the categories saved in the user's account are returned and a status code 200

### Test Steps
- Start the backend flask server
- Send a postman request with a valid username to the settings category endpoint
- If articles related to the category are returned then the test passes

### Pre-requisities
1. Settings category api 

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if given a valid username the api returns a 200 status code and articles relating to categories in the user's account