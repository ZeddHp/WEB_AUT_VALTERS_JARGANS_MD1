import { BasePage } from './BasePage';

export class Grid extends BasePage {

    static gridButton() {
        return cy.get('.nav-item');
    }

    static gridElement() {
        return cy.get('.list-group-item');
    }

}