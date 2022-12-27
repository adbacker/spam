import { CreateOwnerAction } from "../../src/action/CreateOwnerAction";
import { Timestamp } from "../../src/helpers/Timestamp";
import { Owner } from "../../src/model/Owner";
import { ValidateOwnerInfo } from "../../src/validator/ValidateOwnerInfo";

describe("Create owner tests", () => {

    before("before stuff", () => {
        // before stuff
    })

    beforeEach("beforeEach stuff", () => {
        // todo: set up baseUrl and browser parms in cypress.config.js
        cy.visit("http://localhost:8080");
        cy.viewport(1000, 500);
    });

    it("can create new owner", () => {
        // given the user does not exist
        // when user creates a new owner
        // then it should create the owner and land on an owner edit page

        const timestring = Timestamp.nowString();

        const owner = new Owner();
        // stick our timestamp on the end of the names to make sure
        // they're unique values
        owner.firstName = "firstname"+timestring;
        owner.lastName = "lastname"+timestring;
        owner.address = "123 Test Lane";
        owner.city = "Testcity";
        owner.phone = "5558675309";

        new CreateOwnerAction().execute(owner)
        .then( () => {
            new ValidateOwnerInfo().execute(owner);
        });
    });
})