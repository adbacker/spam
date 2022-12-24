import { Action } from "./Action";

export class AddPetAction extends Action {
    public execute(parm?: any): Cypress.Chainable<any> {
        throw new Error("Method not implemented.");
    }

}