// This file defines the Master object and exports it for use in test cases

// Importing the required page objects
var Master = {
    CypressAPI: require('./pageobjects/cypressAPI'), // Importing the products page object
    Utilities: require('./pageobjects/utilities') // Importing the platform page object
};

// Exporting the Master object so that it can be used in the test cases
module.exports = { Master };