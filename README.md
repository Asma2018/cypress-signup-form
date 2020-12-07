## How to run the test suit.

- First you shoud install all modules running

```console
npm install
```

- After that to open cypress

```console
 npm test
```

Please view the following files.

# Verify_url.spec.js

This file contains the test to verify the URL of the company.

# Field_exists.spec.js

Verify the presence of the field named `Made Up Field` that does not exist, in order to force the test to fail. Capture this failure in the results, coupled with a meaningful error message explaining the issue.

# Form_fields.spec.js

verify that the fields Company Name, Industry, Number of Employees, and Phone Number are present.

# Invalid_datatest.spec.js

Populate all text fields with invalid data, leave all dropdown fields blank, and click submit without checking the check box.
Verify that submission was unsuccessful, and check that appropriate error messages have appeared beneath each field.

# signup.spec.js

Verify that the `Number of Employees` drop-down field contains the following options:

- 1 - 10
- 11 - 50
- 51 - 250
- 251 - 1000
- 1000+

Populate all text fields with invalid data, leave all dropdown fields blank, and click submit
without checking the check box.

Verify that submission was unsuccessful, and check that appropriate error messages
have appeared beneath each field.

### Now populate the fields with the following data:

- Company Email: abc@outlook.com (make sure the email address used is
  displayed with the results - if needed, the password for the email account is:
- Full Name `Ignore Test`
- Company Name `IgnoreTest1234`
- Industry `Bar or Nightclub`
- Number of Employees `51 – 250`
- Phone Number `77777777`
- Password: A random 8 character password of your choice, make sure it is included
  with the results output
  Check the checkbox and submit the form.
