import {TableColumn} from "./TableColumn";
import {TableColumnType} from "./TableColumnType";

export class SpecialtiesColumn extends TableColumn {

    constructor() {
        const columnIdentifier = TableColumnType.SPECIALTIES;
        const headerName = "Specialities";
        super(columnIdentifier, headerName);
    }
}
