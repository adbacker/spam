import {TableColumn} from "./TableColumn";
import {TableColumnType} from "./TableColumnType";

export class NameColumn extends TableColumn {

    constructor() {
        const columnIdentifier = TableColumnType.NAME
        const headerName = "Name";
        super(columnIdentifier, headerName);
    }
}
