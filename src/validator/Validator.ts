export abstract class Validator {
    public abstract execute(parm?: any): Cypress.Chainable;
}