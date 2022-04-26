### Test Case ID
search_adv

### Description
Tests whether the user can use advanced search functions such as AND, OR, NOT, and paranthesis usage in the search box.

### Test Steps
- Start up the app.
- In the search box, type in several keywords to search for articles using the advanced search functions (AND, OR, NOT). This can include "Twitter AND CEO", "covid OR corona", "espn NOT nba" or a combination of those functions.
- Repeat the process as necessary to test all of the advanced search features.

### Pre-requisites
- Access to the app

### Author
Megan Resurreccion 

### Test Method
Manual Regression

### Pass/Fail Criteria
Passes if appropriate articles are rendered from the advanced search request. Articles must be relevant to the search request submitted. Otherwise the test fails if no articles appear or irrelevant articles are displayed.
