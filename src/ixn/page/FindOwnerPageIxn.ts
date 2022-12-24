import { FindOwnerPage } from "../../model/page/FindOwnerPage";

export class FindOwnerPageIxn {

    public static enterOwnerLastName(ownerLastName: string): Cypress.Chainable {
        return cy.get(FindOwnerPage.ownerLastNameTextbox).type(ownerLastName);
    }

    public static clickFindOwnerButton(): Cypress.Chainable {
        return cy.get(FindOwnerPage.findOwnerButton).click();
    }
}