import { FindOwnerPageIxn } from "../ixn/page/FindOwnerPageIxn";
import { MenuHeaderIxn } from "../ixn/page/MenuHeaderIxn";
import { Action } from "./Action";

export class FindOwnersAction extends Action {
    
    public execute(lastName: string): Cypress.Chainable {
        return MenuHeaderIxn.clickMenuToggler()
        .then( () => {
            MenuHeaderIxn.clickFindOwners();
        }).then( () => {
            FindOwnerPageIxn.enterOwnerLastName(lastName);
        }).then( () => {
            FindOwnerPageIxn.clickFindOwnerButton();
        });
    }

}