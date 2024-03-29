import {FindOwnersAction} from "../../src/action/FindOwnersAction";
import {Owner} from "../../src/model/Owner";
import {ValidateOwnerInTableResults} from "../../src/validator/ValidateOwnerInTableResults";

describe("Owner Search", () => {

    before("before stuff", () => {
        // before stuff
    })

    beforeEach("beforeEach stuff", () => {
         // todo: set up baseUrl and browser parms in cypress.config.js
         cy.visit("http://localhost:8080");
         cy.viewport(1000, 500);
    })

    it.skip("owner search with one result should show owner detail page", () => {
        // given an existing owner
        // searching for that owner should 
        // land on the owner detail page
    })

    it.only("owner search with more than one result should show owner list result including owner", () => {
        // given multiple owners with the same last name
        // when we search for that owner last name  
        // then the owner expected should be in the search results table

        // known pre-existing owner in data set
        const owner = new Owner();
        owner.address="638 Cardinal Ave.";
        owner.firstName = "Betty";
        owner.lastName = "Davis";
        owner.city = "Sun Prairie";
        owner.phone = "6085551749";

        new FindOwnersAction().execute(owner.lastName)
        .then( () => {
           new ValidateOwnerInTableResults().execute(owner);
        })
    })


    it.skip("owner search with no parms should show all owners in result table", () => {
        // given multiple owners in the results
        // if no name is specified in the last name search box
        // then all owners should be shown in the result table

    })

    it.skip("search for non existing owner should return not found", () => {
        // given a last name that doesn't exist in the system
        // when it is searched for 
        // the system should return not found
        
    })
})