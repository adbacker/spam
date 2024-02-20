import {OwnerSearchResultsPage} from "../../model/page/OwnerSearchResultsPage";
import {TableIxn} from "../table/TableIxn";

export class OwnerSearchResultsPageIxn {

    public static getOwnerSearchResultsTable(): Cypress.Chainable {
        return TableIxn.getParsedTable(OwnerSearchResultsPage.ownersSearchResultsTable);
    }
}