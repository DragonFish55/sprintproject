# Test Case ID:
page_mult

# Description
Tests whether pagination functions when going forward and backward between pages of articles, with articles changing and matching the pages they were on. This tests that each page can keep track of their page visibility by array value sent through props parameter and that each set of data was evenly divided into pages.

# Test Steps
1. Launch app and navigate to http://127.0.0.1:3000.
2. Click on a single category tab
3. This queries the single category api and returns news articles
4. After retrieving articles a Next Page button should be displayed on the page
5. Click on the next page button for the articles. Check to see if a new page of articles is displayed.
6. Click on the previous page button for the articles. Check to see if the same page of articles from earlier is displayed.
7. If pages are changing then the NewsReel component is functioning and showing a page based on the given array component property and the next page and previous page prop functions

# Pre-requisites
- Landing Page
- Pagination Functions

# Author
Megan Resurreccion

# Test Method
N/A

# Pass/Fail Criteria
Passes if on one page a set of articles is displayed and on the next page a different set of articles is displayed. Additionally, test passes if the sets of articles are consistent when toggling between sets of pages.
