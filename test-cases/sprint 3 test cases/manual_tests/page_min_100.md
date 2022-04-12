### Test Case Id: 
page_min_100

### Description:
Tests that pagination supports at least 10 pages 

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- Click on one of the category tabs that are not selected 
- Once the articles for hat category appear and the next page button click the next page button until you reach the last page.
- If the total pages was 10 then the test succeeds 

### Pre-requisities
1. Landing Page

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if you click through at least 10 pages of 10 articles for a single category meaning there were 100 articles returned for a givn category. Otherwise test fails