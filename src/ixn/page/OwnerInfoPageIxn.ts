import {OwnerInfoPage} from "../../model/page/OwnerInfoPage";
import {TableIxn} from "../table/TableIxn";

export class OwnerInfoPageIxn {

    public static clickEditOwnerButton(): Cypress.Chainable {
        return cy.get(OwnerInfoPage.editOwnerButton).click();
    }

    public static clickAddPetButton(): Cypress.Chainable {
        return cy.get(OwnerInfoPage.addNewPetButton).click();
    }   

    public static getOwnerInfoTable(): Cypress.Chainable {
        return TableIxn.getParsedTable(OwnerInfoPage.ownerInfoTable);
    }

    public static getPetVisitTable(): Cypress.Chainable {
        return TableIxn.getParsedTable(OwnerInfoPage.petVisitTable);
    }

    public static getOwnerName(): Cypress.Chainable {
        return cy.get(OwnerInfoPage.ownerName).invoke('text');
    }
}