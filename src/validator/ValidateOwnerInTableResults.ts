import { OwnerInfoPageIxn } from "../ixn/page/OwnerInfoPageIxn";
import { Owner } from "../model/Owner";
import { TableQuery } from "../query/TableQuery";
import { Validator } from "./Validator";

/**
 * @description owner info exists in table results
 * @param Owner
 */
export class ValidateOwnerInTableResults extends Validator{
    public execute(owner: Owner): Cypress.Chainable<boolean> {
        
        // could be tightened up with a generic "table/colname/value" list
        // passed into a validation loop

        return OwnerInfoPageIxn.getOwnerInfoTable()
        .then (oit => {
            TableQuery.hasColumnWithRowValue(oit,"Name",owner.fullName())
                .then(  nameFound => {
                     expect(nameFound, `owner name ${owner.fullName()} should be present in results table`).to.be.true;
                });
            TableQuery.hasColumnWithRowValue(oit,"Address",owner.address)
                .then(  nameFound => {
                     expect(nameFound, `owner address ${owner.address} should be present in results table`).to.be.true;
                });
            TableQuery.hasColumnWithRowValue(oit,"Phone",owner.phone)
                .then(  nameFound => {
                     expect(nameFound, `owner phone ${owner.phone} should be present in results table`).to.be.true;
                });
        });
    }
}