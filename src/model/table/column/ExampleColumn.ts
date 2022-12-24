import {TableColumn} from "./TableColumn";
import {TableColumnType} from "./TableColumnType";

/**
 * @description Template/Example for a new table column
 */
export class ExampleColumn extends TableColumn {

    constructor() {
        const columnIdentifier = TableColumnType.EXAMPLEONLY;
        const headerName = "HeaderName"; // text at the top of the column
        super(columnIdentifier, headerName);
    }
}
