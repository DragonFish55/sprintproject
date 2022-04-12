### Test Case Id: 
chk_cat_sng

### Description:
Tests that while the user is on the landing page and they click on one of the single category tabs the tab is highlighted and the page displays news related to that category including having pagination. This also tests the link between the News data component page and the data sent down through the props parameter on the landing page.

### Test Steps 
- Start api by navigating to 127.0.0.1:3000
- Once you are on the landing page the Home tab should be selected
- Click on the Health tab.
- If the tab is highlighted and the page displays health news articles starting from most recent then the test passes.

### Pre-requisities
1. Landing Page

### Author
John Paglia

### Test Method
1. getCategory

### Pass/Fail Criteria
Test passes if the single category api returns news articles relevant to the category type whose tab was selected. Otherwise the test fails