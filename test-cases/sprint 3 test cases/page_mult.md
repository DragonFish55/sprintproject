# Test Case ID:
page_mult

# Description
Tests whether pagination functions when going forward and backward between pages of articles, with articles changing and matching the pages they were on.

# Test Steps
1. Launch app and navigate to http://127.0.0.1:3000.
2. Click on the next page of articles. Check to see if new page of articles is displayed.
3. Click on the previous page of articles. Check to see if the same page of articles from earlier is displayed.
4. Repeat as necessary for varying pages of articles.

# Pre-requisites
- Landing Page
- Pagination Function

# Author
Megan Resurreccion

# Test Method

# Pass/Fail Criteria
Passes if on one page a set of articles is displayed and on the next page a different set of articles is displayed. Additionally, test passes if the sets of articles are consistent when toggling between sets of pages.
