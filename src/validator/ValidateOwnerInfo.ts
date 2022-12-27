import { OwnerInfoPageIxn } from "../ixn/page/OwnerInfoPageIxn";
import { Owner } from "../model/Owner";
import { TableQuery } from "../query/TableQuery";
import { Validator } from "./Validator";

/**
 * @description owner info page has correct data
 * @param Owner
 * @requires at the owner info page
 */
export class ValidateOwnerInfo extends Validator{
    public execute(owner: Owner): Cypress.Chainable<boolean> {
        return OwnerInfoPageIxn.getOwnerName()
        .then( name => {
            expect(name,"name from page should equal owner name").to.equal(owner.fullName());
        });
    }
}