### Test Case ID
pref_reg

### Description
Tests that a signed in user can successfully set preferences and have them saved.

### Test Steps
- Start up the app.
- Sign into a user account.
- When on the landing page, click on the Settings button.
- Select a few category preferences and hit submit.
- On the landing page, check to make sure that when the Home tab is selected that the preferred news categories show up among the articles.
- Click on the settings button again to ensure the settings are still saved.

### Pre-requisites
- Access to the app
- Account login credentials

### Author
- Megan Resurreccion

### Test Method
- Manual Regression

### Pass/Fail Criteria
Passes if the user is able to successfully select and save category preferences and see articles with those categories on the Home tab. Category preferences should also be saved for the user on the database.