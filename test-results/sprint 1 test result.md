# Test Results

| Test Case ID                 | Group Member           | Pass/Fail | Comments                                          |
|------------------------------|------------------------|-----------|---------------------------------------------------|
| status_200                   | John Paglia            | Fail      | Failed due to incorrect content-type header       |
| status_200                   | John Paglia            | Pass      | After adding application/json to content test pass|
| status_400                   | John Paglia            | Pass      | Test passed by creating invalid dataand sending   |
| status_401                   | John Paglia            | Fail      | Test failed due to not returning response code    |
| status_401                   | John Paglia            | Pass      | Test passed after adding response code to output  |
| status_404                   | John Paglia            | Pass      | Test passed after entering invalid endpoint       |
| status_500                   | John Paglia            | Pass      | None                                              |
| signup_create                | John Paglia            | Pass      | None                                              |
| password_nolowercase         | Megan Resurreccion     | Pass      | None                                              |
| password_yeslowercase        | Megan Resurreccion     | Pass      | None                                              |
| password_nouppercase         | Megan Resurreccion     | Pass      | None                                              |
| password_yesuppercase        | Megan Resurreccion     | Fail      | None                                              |
| password_yesuppercase        | Megan Resurreccion     | Pass      | None                                              |
| password_nonletters_missing  | Megan Resurreccion     | Pass      | None                                              |
| password_nonletters_contains | Harshal Bhole          | Fail      | None                                              |
| password_nonletters_contains | Harshal Bhole          | Pass      | None                                              |
| password_lessthan8           | Harshal Bhole          | Pass      | None                                              |
| password_morethan7           | Harshal Bhole          | Pass      | None                                              |
| username_lessthan8           | Harshal Bhole          | Pass      | None                                              |
| username_morethan7           | Harshal Bhole          | Fail      | None                                              |
| username_morethan7           | Harshal Bhole          | Pass      | None                                              |
