export abstract class Action {
    public abstract execute(parm?: any): Cypress.Chainable;
}