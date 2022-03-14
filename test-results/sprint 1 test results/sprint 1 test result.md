# Test Results

| Test Case ID                 | Group Member           | Pass/Fail | Comments                                          |
|------------------------------|------------------------|-----------|---------------------------------------------------|
| status_200                   | John Paglia            | Fail      | Failed due to incorrect content-type header       |
| status_200                   | John Paglia            | Pass      | After adding application/json to content test pass|
| status_400                   | John Paglia            | Pass      | Test passed by creating invalid dataand sending   |
| status_401                   | John Paglia            | Fail      | Test failed due to not returning response code    |
| status_401                   | John Paglia            | Pass      | Test passed after adding response code to output  |
| status_404                   | John Paglia            | Pass      | Test passed after entering invalid endpoint       |
| status_500                   | John Paglia            | Pass      | Test passed after intentional server error was thrown in Postman|
| signup_create                | John Paglia            | Pass      | Passed when credentials were successfully entered by a user |
| password_nolowercase         | Megan Resurreccion     | Pass      | Passed when error message appeared for there being no lowercase |
| password_yeslowercase        | Megan Resurreccion     | Pass      | Passed when sign in was successful with inclusion of lowercase|
| password_nouppercase         | Megan Resurreccion     | Pass      | Test passed when error was thrown when no uppercase were included|
| password_yesuppercase        | Megan Resurreccion     | Fail      | Test failed because uppercase letters were included in the password but were not detected by the request |
| password_yesuppercase        | Megan Resurreccion     | Pass      | Passed because uppercase requirement was included in password requirement of the code|
| password_nonletters_missing  | Megan Resurreccion     | Pass      | Passed because error message based on                                              |
| password_nonletters_contains | Harshal Bhole          | Fail      | Test failed due to there being no nonletters contained in the password, but the request going through regardless |
| password_nonletters_contains | Harshal Bhole          | Pass      | Passed when login was successful with inclusion of nonletter password |
| password_lessthan8           | Harshal Bhole          | Pass      | Test passed after error message appeared indicating password had less than 8 characters |
| password_morethan7           | Harshal Bhole          | Pass      | Test passed when login was successful with password of more than 7 characters |
| username_lessthan8           | Harshal Bhole          | Pass      | Passed when username error message appeared         |
| username_morethan7           | Harshal Bhole          | Fail      | Username error message not appearing and login succssful|
| username_morethan7           | Harshal Bhole          | Pass      | Message not appearing due to having null state var|
