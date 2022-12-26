export class TableQuery {

    public static numRows(table: any): Cypress.Chainable {

        let tableRows = 0;
        table.forEach( row => {
            tableRows++
        })
        // header included in row count
        // so subtract one
        return cy.wrap(tableRows-1);
    }


    /**
     * @description returns true if table contains column
     * @param table
     * @param columnName
     * @returns boolen
     */
    public static hasColumn(table: any, columnName: string): Cypress.Chainable<boolean> {
        let hasColumn:boolean = false;
        table.forEach( rowInTable => {
            if (rowInTable[columnName]) {
                hasColumn = true;
            }
        })
        return cy.wrap(hasColumn);
    }

    /**
     * @param tableLocator
     * @param columnTypeToSearch
     * @param rowValueToFind
     * @returns boolean
     */
    public static hasColumnWithRowValue(table: any, columnToSearch: string, rowValueToFind: string): Cypress.Chainable<boolean> {
        return TableQuery.getRowNumberWithColumnValue(table,columnToSearch,rowValueToFind)
        .then( foundInRow => {
            if (foundInRow >= 0) {
                return true;
            } else {
                return false;
            }
        })
    }


    /**
     * @description return index of the first row for the passed in table matching the column type + column value, -1 if no match found
     * @param tableContents table as json
     * @param columnToSearch
     * @param valueToMatch
     * @returns integer
     */
    public static getRowNumberWithColumnValue(tableContents: any, columnToSearch: string, valueToMatch: string): Cypress.Chainable<number> {
        debugger
        if (TableQuery.hasColumn(tableContents,columnToSearch)) {
            const foundIndex:number = tableContents.findIndex(o => (o[columnToSearch]).trim() === valueToMatch);
            return cy.wrap(foundIndex);
        } else {
            return cy.wrap(-1);
        }
    }


    /**
     * Find the row containing the column,value pair passed in, then return the value for the column requested
     * @requires the columnTypeOfReturnValue exists in the passed in table.  Returns null if nothing found
     * @param json table from table parser
     * @param searchColumnHeader
     * @param columnValueToMatch
     * @param columnTypeOfReturnValue
     * @returns value found in columnTypeOfReturnValue
     */

    public static getRowValueForMatchingColumnValue(table: any, searchColumnHeader: string, columnValueToMatch: string, columnTypeOfReturnValue: string): Cypress.Chainable {
        if ( TableQuery.hasColumn(table,searchColumnHeader) && TableQuery.hasColumn(table,columnTypeOfReturnValue)) {
            return TableQuery.getRowNumberWithColumnValue(table, searchColumnHeader, columnValueToMatch)
            .then(rowNum => {
                if (rowNum >= 0) { // insure column xists
                    const returnRecord = table[rowNum];
                    if (null != returnRecord[columnTypeOfReturnValue]) {
                        const returnValue = returnRecord[columnTypeOfReturnValue];
                        return cy.wrap(returnValue);
                    }
                    return cy.wrap(null);
                } else {
                    return cy.wrap(null);
                }
            })
        } else {
            return cy.wrap(null);
        }
    }
}
