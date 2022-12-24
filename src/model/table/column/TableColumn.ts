/**
 * Individual column of a table
 */
import {TableColumnType} from "./TableColumnType";

export abstract class TableColumn {
    readonly tableColumnType: TableColumnType;
    readonly headerName: string;

    // protected constructor allows the extending columns to set their specific names
    // and still have it be read-only when accessed
    // ie, keeps folks from accidentally assigning vs. comparing
    constructor(ruleColumnId: TableColumnType, headerName?: string) {
        this.tableColumnType = ruleColumnId;
        if (headerName) {
            this.headerName = headerName;
        } else {
            this.headerName = "need to create header name for this column";
        }
        return this;
    }
}
