import { describe } from 'mocha';
import { Master } from '../../../support/Master';
const CypressAPI = Master.CypressAPI

describe('Platform', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseURL') + '/cypress-api');
    });

    // page validation test cases focuses only on the web elements on the UI, it does not include any flows
    // test data need not be valid here since no journeys are being tested.
    it('should navigate to the platform page', () => {
        cy.get(CypressAPI.Banner.title).should('be.visible');
        cy.get(CypressAPI.Banner.anyelement)
            .closest('ul')
            .should('have.class', 'list-group')

        // click on any element
        cy.get(CypressAPI.AnySection.anyelement).should('contain.text', 'any text').click()

        // wait until load spinner is not vsible
        cy.get(CypressAPI.AnySection.spinnerElement, { setTimeout: 10000 }).should('have.attr', 'ng-reflect-is-loading', 'false');
    });
});