import { OwnerInfoPageIxn } from "../ixn/page/OwnerInfoPageIxn";
import { OwnerSearchResultsPageIxn } from "../ixn/page/OwnerSearchResultsPageIxn";
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

        return OwnerSearchResultsPageIxn.getOwnerSearchResultsTable()
        .then (oit => {
            TableQuery.hasColumnWithRowValue(oit,"Name",owner.fullName())
            .then( name => {
                expect(name, `owner name ${owner.fullName()} should be present in results table`).to.be.true;
            });
            TableQuery.hasColumnWithRowValue(oit,"Address",owner.address)
            .then( address => {
                expect(address, `owner address ${owner.address} should be present in results table`).to.be.true;
            });
            TableQuery.hasColumnWithRowValue(oit,"City",owner.city)
            .then( city => {
                expect(city, `owner city ${owner.city} should be present in results table`).to.be.true;
            });
            TableQuery.hasColumnWithRowValue(oit,"Telephone",owner.phone)
            .then( phone => {
                expect(phone, `owner telephone ${owner.phone} should be present in results table`).to.be.true;
            });
        });
    }
}