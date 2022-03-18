### Test Case Id:
query_defautapi_200_top

### Description
Check if newsapi query type is a valid type. If so then query the api
using the default category

### Test Steps
1. Call the function using a request at "GET /api/top_headline/defaultApi"
using the client test option
2. This will call the top-headlines newsapi endpoint for the General category

### Pre-requisities
1. The only requirement is that the server is either running or you are using a 
unittest client and also call the rest api endpoint

### Author
John Paglia

### Test Method
getDefaultApi

### Pass/Fail Criteria
Passes if the json data for the top-headlines in the General category is returned
as well as a 200 response code. The test fails if "None" is returne for the data
as well as a status code that is not 200