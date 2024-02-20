import {Owner} from "../../model/Owner";
import {Query} from "../Query";

export class OwnerExistsQuery extends Query {
    public execute(owner: Owner): Cypress.Chainable<any> {
        throw new Error("Method not implemented.");
    }

}