This a skeleton of the Test Automation Framework in Cypress for the UI testing. Feel free to optimise as required.

# `cypress` folder:

# `e2e` folder:

## `behavioural` folder:

### `cypressAPI` folder:

- `cypressAPI.cy.js` file:
Contains tests related to the behavior of the cypressAPI page.
Any functionalities/journeys can be tested here.

### `utilities` folder

- `utilities.cy.js` file:
Contains tests related to the behavior of the utilities page.
Any functionalities/journeys can be tested here.

## `page-validation` folder:

### `platform` folder:

- `cypressAPI-pv.cy.js` file:
Contains tests related to the assertions of the UI elements of the platform page.
These page validation tests are aimed at asserting the UI elements.
Example:
Wrong format inputs should display the error message in red color.
After a button click, the load spinner should be visible, etc.,.

### `utilities` folder

- `utilities-pv.cy.js` file:
Contains tests related to the assertions of the UI elements of the products page.
These page validation tests are aimed at asserting the UI elements.
Example:
Asserting the text box, color of the buttons, visibility, properties of the dropdown, etc.
Asserting if a CSS contains ordered list or unordered list, etc.

# fixtures folder

- This folder contains the test data in JSON format.

# support folder:

## pageobjects folder:

- `cypressAPI.js` file
- `utilities.js` file

## commands.js file

- Contains the business-specific functions or commands.

## e2e.js file

- We can import the required modules here. The e2e.js file runs before all the tests in the cypress run.

## Master.js file

- This file defines the Master object.
- Importing the required page objects.
- Exporting all page objects under one Master object so that they can be imported anywhere without any confusion.
Note:
- Have a look at the contents inside the `page objects` folder and how they are exported.
- Then have a look at the Master.js file to see how they are imported page-wise and exported using a single variable.
- The Master.js file has been created for the ease of use for any test developer to understand how many pages are present in the application. (This can be achieved by using IntelliSense autocomplete methods and functions).

## HTML Test Reports

- We have used 'cypress-mochawesome-reporter' to generate the HTML reports.
- In 'cypress.config.js', the package is included `require('cypress-mochawesome-reporter/plugin')(on)`.
- No other additional steps are required to generate the report.
- The HTML report is auto-generated after the test run.
