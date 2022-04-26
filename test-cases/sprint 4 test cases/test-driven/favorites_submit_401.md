### Test Case Id: 
fav_submit_401

### Description:
Tests whether the entire favorites list of article details can be retrieved

### Test Steps
- Delete user
- Call api to try to add an article to database with
deleted user

### Pre-requisities
1.Submit Favorites API

### Author
John Paglia

### Test Method
test_submitfavorites_401

### Pass/Fail Criteria
Passes if 401 status code is retrieved