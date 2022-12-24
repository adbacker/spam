
export class TableIxn {
    public static getParsedTable(tableLocator: string): Cypress.Chainable {
        // @ts-ignore yes, getTable does work
        return cy.get(tableLocator).getTable();
    }
}