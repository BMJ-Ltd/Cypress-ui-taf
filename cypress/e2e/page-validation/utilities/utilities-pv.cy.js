import { describe } from 'mocha';
import { Master } from '../../../support/Master';
const Utilities = Master.Utilities

describe('Platform', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseURL') + '/utilities');
    });

    // page validation test cases focuses only on the web elements on the UI, it does not include any flows
    // test data need not be valid here since no journeys are being tested.

    it('should navigate to the platform page', () => {
        cy.get(Utilities.Banner.title).should('be.visible');
        //Ex: cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.get(Utilities.Banner.anyelement)
            .closest('ul')
            .should('have.class', 'list-group')

        // wait until load spinner is not visible
        cy.get(Utilities.AnySection.spinnerElement).should('have.attr', 'ng-reflect-is-loading', 'false');
    });
});