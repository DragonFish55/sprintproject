### Test Case ID
search_none

### Description
Tests whether an appropriate "no results" message is displayed when a search request with no relevant results is submitted in the search bar.

### Test Steps
- Start up the app.
- In the search box, type in keywords for articles that may not render results, aka keywords that do not relate to each other such as sports terms with business terms with science terms. Advanced search functions may be used here too. Very specific search requests may be submitted too.

### Pre-requisites
- Access to the app

### Author
Megan Resurreccion

### Test Method
Manual Regression

### Pass/Fail Criteria
Passes if the "no results" message is displayed upon submitting the search request. The test fails if any articles are displayed when the search request is submitted.