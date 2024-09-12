import { describe } from 'mocha';
import { Master } from '../../../support/Master';
const Utilities = Master.Utilities;

describe('Platform', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseURL') + '/cypress-api');
    });

    // behavioural test cases includes postive journeys/flows
    // for ex purposes I have added only the visibility check
    it('should navigate to the platform page', () => {
        cy.get(Utilities.Banner.title).should('be.visible');
        cy.get(Utilities.Banner.description).should('be.visible');
    });
});
