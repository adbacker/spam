import { FindOwnerPageIxn } from "../ixn/page/FindOwnerPageIxn";
import { NewOwnerPageIxn } from "../ixn/page/NewOwnerPageIxn";
import { Owner } from "../model/Owner";
import { Action } from "./Action";

export class CreateOwnerAction extends Action {
 
    public execute(owner: Owner): Cypress.Chainable<any> {
        return FindOwnerPageIxn.navTo()
        .then( () => {
            FindOwnerPageIxn.clickAddOwnerButton();
        }).then( () => {
            NewOwnerPageIxn.enterFirstName(owner.firstName);
            NewOwnerPageIxn.enterLastName(owner.lastName);
            NewOwnerPageIxn.enterAddress(owner.address);
            NewOwnerPageIxn.enterCity(owner.city);
            NewOwnerPageIxn.enterTelephone(owner.phone);
        }).then( () => {
            NewOwnerPageIxn.clickAddOwnerButton();
        })
    }

}