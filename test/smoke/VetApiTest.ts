import { HttpApiCallMgr } from "../../src/api/HttpApiCallMgr";
import { VetInfoJsonEndpoint } from "../../src/model/api/vetInfoApi/VetInfoJsonEndpoint";
import { VetInfoApiCall } from "../../src/model/api/vetInfoApi/VetInfoApiCall";
import { GetScheduleEndpoint } from "../../src/model/api/scheduleApi/GetScheduleEndpoint";
import { GetScheduleApiCall } from "../../src/model/api/scheduleApi/GetScheduleApiCall";
import {GetScheduleCallMgr} from "../../src/api/GetScheduleCallMgr";
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

    it.only("call get schedules endpoint", () => {
        const callMgr: GetScheduleCallMgr = new GetScheduleCallMgr();
        callMgr.addParm("date","20240122");
        callMgr.addParm("vetId","101");

        callMgr.submit<GetScheduleApiCall>()
        .then( apiCall => {
            // response should be of type VetApiResponse
            expect(apiCall.response.length, "appointment list should be 2").to.equal(2);
            const firstAppointment = apiCall.response[0];
            expect(firstAppointment.summary).to.equal("initial intake for poopsie");
            expect(firstAppointment.procedureCode).to.equal("30110")
        })
    })
})