import { describe } from 'mocha';
import {Master} from '../../../support/Master';
const CypressAPI = Master.CypressAPI

describe('Products', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseURL') + '/utilities');
    });

    // behavioural test cases includes postive journeys/flows
    // for ex purposes I have added only the visibility check
    it('should navigate to the products page', () => {
        cy.get(CypressAPI.Banner.title).should('be.visible');
        cy.get(CypressAPI.Banner.description).should('be.visible');
    });
});