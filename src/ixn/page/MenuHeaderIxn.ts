import { MenuHeader } from "../../model/page/MenuHeader";

export class MenuHeaderIxn {

    public static clickFindOwners(): Cypress.Chainable {
        return cy.get(MenuHeader.findOwnersSelection).click();
    }
}