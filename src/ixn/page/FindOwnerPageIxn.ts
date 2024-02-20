import {FindOwnerPage} from "../../model/page/FindOwnerPage";
import {MenuHeaderIxn} from "./MenuHeaderIxn";

export class FindOwnerPageIxn {

    public static navTo(): Cypress.Chainable {
        return MenuHeaderIxn.clickFindOwners();
    }
    
    public static enterOwnerLastName(ownerLastName: string): Cypress.Chainable {
        return cy.get(FindOwnerPage.ownerLastNameTextbox).type(ownerLastName);
    }

    public static clickFindOwnerButton(): Cypress.Chainable {
        return cy.get(FindOwnerPage.findOwnerButton).click();
    }

    public static clickAddOwnerButton(): Cypress.Chainable {
        return cy.get(FindOwnerPage.addOwnerButton).click();
    }

}