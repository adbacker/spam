export abstract class Query {
    public abstract execute(parm?: any): Cypress.Chainable;
}