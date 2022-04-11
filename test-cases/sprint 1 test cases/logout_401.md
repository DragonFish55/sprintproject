### Test Case Id: 
lg_out_401

### Description:
Tests that given an invalid username the output of the api returns a 
non true value string as well as a 401 status code

### Test Steps
- start backend flask server
- post to the signout api endpoint providing an invalid username
- if the output data is not true and a 401 status code is returned 
the test passes


### Pre-requisities
- Backend Flask Server
- Postman request

### Author
John Paglia

### Test Method
checkLogout

### Pass/Fail Criteria
Passes if data returned from the signout api is not true as well as a 401 status code otherwise the test fails 