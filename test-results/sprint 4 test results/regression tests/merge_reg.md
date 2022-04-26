### Test Case ID
merge_reg

### Description
Tests whether saved category preferences in the settings successfully set up the Home tab to display articles from those specified categories in most recent descending order. 

### Test Steps
- Log onto the app and save a few category preferences.
- When navigated back to the Landing Page, select the Home tab if it's not already selected.
- Scroll through the articles to ensure articles of different categories are displayed.

### Pre-requisites
- Access to the app
- User credentials
- Settings Page

### Author
Megan Resurreccion

### Test Method
Manual Regression

### Pass/Fail Criteria
Passes if the user is able to see articles with selected and saved categories on the Home tab. Articles should be labeled with the category as well. Otherwise the test fails.