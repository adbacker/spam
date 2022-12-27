import { NewOwnerPage } from "../../model/page/NewOwnerPage";

export class NewOwnerPageIxn {
    
    public static enterLastName(lastName: string): Cypress.Chainable {
        return cy.get(NewOwnerPage.lastNameTextbox).type(lastName);
    }

    public static enterFirstName(firstName: string): Cypress.Chainable {
        return cy.get(NewOwnerPage.firstNameTextbox).type(firstName);
    }

    public static enterAddress(address: string): Cypress.Chainable {
        return cy.get(NewOwnerPage.addressTextbox).type(address);
    }

    public static enterCity(city: string): Cypress.Chainable {
        return cy.get(NewOwnerPage.cityTextbox).type(city);
    }

    public static enterTelephone(telephone: string): Cypress.Chainable {
        return cy.get(NewOwnerPage.telephoneTextbox).type(telephone);
    }

    public static clickAddOwnerButton(): Cypress.Chainable {
        return cy.get(NewOwnerPage.addOwnerButton).click();
    }

}