### Test Case ID
pref_reg

### Description
Tests that a signed in user can successfully set preferences on the settings page and have them saved to their account.

### Test Steps
- Start up the app.
- Sign into a user account.
- When on the landing page, click on the Settings button.
- Select a few category preferences and hit submit.
- Click on the settings button again to ensure the settings are still saved
by navigating to the settings page and checking if the same checkboxes are still checked.

### Pre-requisites
- Access to the app
- Account login credentials

### Author
- Megan Resurreccion

### Test Method
- Manual Regression

### Pass/Fail Criteria
Passes if the user is able to successfully select and save category preferences. Category preferences should also be saved for the user on the database. Otheriwse the test fails.
