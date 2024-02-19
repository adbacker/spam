import { HttpApiCallMgr } from "../../src/api/HttpApiCallMgr";
import { VetInfoJsonEndpoint } from "../../src/model/api/vetInfoApi/VetInfoJsonEndpoint";
import { VetInfoApiCall } from "../../src/model/api/vetInfoApi/VetInfoApiCall";
import { GetScheduleEndpoint } from "../../src/model/api/scheduleApi/GetScheduleEndpoint";
import { GetScheduleApiCall } from "../../src/model/api/scheduleApi/GetScheduleApiCall";
import {GetScheduleCallMgr} from "../../src/api/GetScheduleCallMgr";
import {DataUsaCallMgr} from "../../src/api/DataUsaCallMgr";
import {DataUsaApiCall} from "../../src/model/api/datausa/DataUsaApiCall";
import {NationPopulation} from "../../src/model/datausa/NationPopulation";


describe("DataUSA api test", () => {

    before("before stuff", () => {
        // before stuff
    })

    beforeEach("beforeEach stuff", () => {

    })

    it("test DataUsaApi endpoint", () => {
        const callMgr: DataUsaCallMgr = new DataUsaCallMgr();
        callMgr.addParm("drilldowns","Nation");
        callMgr.addParm("measures","Population");

        // callMgr.submit<DataUsaApiCall>()
        callMgr.submit<DataUsaApiCall>()
            .then( apiCall => {
                const responseData = apiCall.response.data;
                const responseSource = apiCall.response.source;

                // pull out just the 2013 data
                const dataFor2013: NationPopulation = responseData.filter( (nationData) => nationData.Year === "2013")[0];
                expect(dataFor2013.Population === 311536594, "2013 population data retrieved should be as expected").to.be.true;
                expect(responseSource[0].annotations.dataset_name === "ACS 5-year Estimate", "dataset_name in source data should be as expected").to.be.true;
            })
    })
})