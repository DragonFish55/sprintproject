### Test Case Id: 
lg_out_200

### Description:
Tests that given a valid username the output of the api returns a 
string indicating that the user can logout as well as a 200 status code

### Test Steps
- start backend flask server
- post to the signout api endpoint providing a valid username
- if the output data is true and stayus code is 200 then the test is a success


### Pre-requisities
- Backend Flask Server
- Postman request

### Author
John Paglia

### Test Method
checkLogout

### Pass/Fail Criteria
Passes if data returned from the signout api is true as well as a 200 status code otherwise the test fails 