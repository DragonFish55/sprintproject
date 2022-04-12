### Test Case Id: 
page_max_250

### Description:
Tests that pagination supports at max 250 pages

### Test Steps
- Start api by navigating to 127.0.0.1:3000
- Login and go to the settings page
- Submit the checkbox form with at least 3 categories checked 
- After redirect to landing page click through the home tab that is currently selected
- If there are 25 pages total and not 30 pages then the test passes 

### Pre-requisities
1. Landing Page
2. Settings Page

### Author
John Paglia

### Test Method
N/A

### Pass/Fail Criteria
Passes if even though more than 25 pages worth of data were queried only 25 pages are displayed.Otherwise the test fails.