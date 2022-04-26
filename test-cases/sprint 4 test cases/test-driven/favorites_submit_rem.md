### Test Case Id: 
fav_submit_rem

### Description:
Tests whether a favorite can be removed from the users account

### Test Steps
- Create new user
- Call api to try to add an article to database for the given user
- Check whether the article exists and then remove the article from the users account

### Pre-requisities
1.Submit Favorites API

### Author
John Paglia

### Test Method
test_submitfavorites_rem

### Pass/Fail Criteria
Passes if favorite information is removed from the database