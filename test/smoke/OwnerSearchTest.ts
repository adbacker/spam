import { FindOwnersAction } from "../../src/action/FindOwnersAction";

describe("Owner Search", () => {

    before("before stuff", () => {
        // stuff
    })

    beforeEach("beforeEach stuff", () => {
        cy.visit("http://localhost:8080");
        cy.viewport(550, 750);

    })

    it("owner search with one result should show owner detail page", () => {
        // given an existing owner
        // searching for that owner should 
        // land on the owner detail page

        new FindOwnersAction().execute("backer")
        .then( () => {
           cy.location().should( loc => {
            expect(loc.href).to.include("lastName=backer");
           })
        })
    })

    it("owner search with multiple hits should show owner result table", () => {
        // given multiple owners with the same last name
        // if the last name is searched for
        // then all matching owners should be shown in the result table

    })

    it("search for non existing owner should return not found", () => {
        // given a last name that doesn't exist in the system
        // when it is searched for 
        // the system should return not found
        
    })
})