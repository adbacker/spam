import {VetInfoApiCall} from "../../src/model/api/vetInfoApi/VetInfoApiCall";
import {VetListApiMgr} from "../../src/api/VetListApiMgr";

describe("Vets api test", () => {

    before("before stuff", () => {
        // before stuff
    })

    beforeEach("beforeEach stuff", () => {

    })

    it("call vets json endpoint", () => {
        const vmg: VetListApiMgr = new VetListApiMgr();

        // fill in the request stuff
        vmg.submit<VetInfoApiCall>()
        .then( apiCall => {
            // response should be of type VetApiResponse
            expect(apiCall.response.vetList.length, "vet list length should be > 0").to.be.greaterThan(0);

            // vet James Carter has zero specialties
            const jamesVetList = apiCall.response.vetList.filter(vet => vet.firstName === "James");
            expect(jamesVetList.length,"Should get a single response").to.equal(1);
            const jamesVet = jamesVetList[0];
            expect(jamesVet.firstName).to.equal("James");
            expect(jamesVet.lastName).to.equal("Carter")
            expect(jamesVet.nrOfSpecialties).to.equal(0);      
        })
    })
})