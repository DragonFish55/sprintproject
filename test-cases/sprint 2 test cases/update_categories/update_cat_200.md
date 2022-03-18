### Test Case Id:
update_cat_200

### Description


### Test Steps
1. Create an account with a valid username and password
2. Call the GET /api/new/<user>/categories endpoint and add on to the end 
url params in the form of ?<key>=<value>&<key>=<value> for all the query
parameters you are using
3. Finally, call the GET /api/<user>/getApiData endpoint by providing the username that was created and if the json data and a response code of 200 is returned the 
test passes

### Pre-requisities

### Author

### Test Method

### Pass/Fail Criteria
