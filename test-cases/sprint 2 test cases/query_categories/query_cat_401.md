### Test Case Id: 
query_cat_401

### Description:
Tests that given that the username does not exist then the api will
respond with a 401 response code

### Test Steps
1. Call the GET /api/<user>/getApiData endpoint by providing an invalid username 

### Pre-requisities
1. Having the server running or you are using a unittest client and also call the rest api endpoint with an invalid username

### Author
John Paglia

### Test Method
getCategoryData

### Pass/Fail Criteria
Passes if function returns a response code of 401 indicating invalid user.
Fails if reponse code is anything other than 401. 