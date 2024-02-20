import {TableQuery} from "../../src/query/TableQuery";


describe("Table code unit tests", () => {


    before(() => {
        // before shiz
    })

    beforeEach(() => {
        // beforeach shiz
        cy.visit({
            url: "test/unit/tabletest.html",
            method: 'GET',
        });
    })

    it("hasColumn should return true if column present", () => {
        // @ts-ignore
        cy.get(".data-table").getTable()
            .then( (table: any) => {
                TableQuery.hasColumn(table,"col1").should("be.true");
            })
    })

    it("hasColumn should return false if column not present", () => {
        // @ts-ignore

        cy.get(".data-table").getTable()
            .then( (table: any) => {
                TableQuery.hasColumn(table,"thisColumnDoesntExist").should("be.false");
            })
    })

    it("getRowNumberWithColumnValue should return a correct row value", () => {
        // @ts-ignore
        cy.get(".data-table").getTable()
            .then( (table: any) => {
                TableQuery.getRowNumberWithColumnValue(table, "col1", "row3col1").should("equal", 2);
            })
    })

    it("getRowNumberWithColumnValue should return -1 for an unfound cell match value", () => {
        // @ts-ignore
        cy.get(".data-table").getTable()
            .then( (table: any) => {
                TableQuery.getRowNumberWithColumnValue(table, "col1", "row1valueNotExist").should("equal", -1);
            })
    })

    it("getRowNumberWithColumnValue should return -1 if column to search is not present", () => {
        // @ts-ignore
        cy.get(".data-table").getTable()
            .then( (table: any) => {
                TableQuery.getRowNumberWithColumnValue(table, "col666", "row3col1").should("equal",-1);
            })
    })

    it("getRowValueForMatchingColumnValue should return the correct column value", () => {
        // @ts-ignore
        cy.get(".data-table").getTable()
            .then( (table: any) => {
                TableQuery.getRowValueForMatchingColumnValue(table,"col4","row1col4","col1").should("equal","row1col1");
            })
    })

    it("getRowValueForMatchingColumnValue should return the correct column value for column only populated for some rows", () => {
        // @ts-ignore
        cy.get(".data-table").getTable()
            .then( (table: any) => {
                TableQuery.getRowValueForMatchingColumnValue(table,"col4","row4col4","col5").should("equal","row4col5");
            })
    })

    it("getRowValueForMatchingColumnValue should return the correct column value for column with empty string", () => {
        // @ts-ignore
        cy.get(".data-table").getTable()
            .then( (table: any) => {
                TableQuery.getRowValueForMatchingColumnValue(table,"col4","row5col4","col5").should("be.empty");
            })
    })

    it("getRowValueForMatchingColumnValue should return null if the search column exists, but return column does not", () => {
        // @ts-ignore
        cy.get(".data-table").getTable()
            .then( (table: any) => {
                TableQuery.getRowValueForMatchingColumnValue(table,"col4","columnValueNotExist","col1").should("be.null");
            })
    })

    it("getRowValueForMatchingColumnValue should return null if the search column exists in table, but return column type does not have data (ie, no td)", () => {
        // @ts-ignore
        cy.get(".data-table").getTable()
            .then( (table: any) => {
                TableQuery.getRowValueForMatchingColumnValue(table,"col4","noDataHere","col5").should("be.null");
            })
    })

    it("getRowValueForMatchingColumnValue should return null if the column value to match does not exist", () => {
        // @ts-ignore
        cy.get(".data-table").getTable()
            .then( (table: any) => {
                TableQuery.getRowValueForMatchingColumnValue(table,"col4","columnValueNotExist","col1").should("be.null");
            })
    })

    it("getRowValueForMatchingColumnValue should return null if search column header does not exist", () => {
        // @ts-ignore
        cy.get(".data-table").getTable()
            .then( (table: any) => {
                TableQuery.getRowValueForMatchingColumnValue(table,"nonExistingSearchHeader",
                    "row3col1","col1").should("be.null");
            })
    })

    it("getRowValueForMatchingColumnValue should return null if return column type does not exist", () => {
        // @ts-ignore
        cy.get(".data-table").getTable()
            .then( (table: any) => {
                TableQuery.getRowValueForMatchingColumnValue(table,"col1",
                    "row3col1","nonExistingReturnColumn").should("be.null");
            })
    })
})
