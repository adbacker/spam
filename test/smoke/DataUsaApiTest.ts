import {DataUsaCallMgr} from "../../src/api/DataUsaCallMgr";
import {DataUsaApiCall} from "../../src/model/api/datausa/DataUsaApiCall";
import {NationPopulation} from "../../src/model/datausa/NationPopulation";
import {DataUsaEndpoint} from "../../src/model/api/datausa/DataUsaEndpoint";

describe("DataUSA api test", () => {

    before("before stuff", () => {
        // before stuff
    })

    beforeEach("beforeEach stuff", () => {

    })

    it("test DataUsaApi endpoint", () => {
        const callMgr: DataUsaCallMgr = new DataUsaCallMgr(new DataUsaEndpoint());
        // give ourselves reminders of what the DataUsaParms actually are...
        callMgr.addParm(<DataUsaParm>"drilldowns","Nation");
        callMgr.addParm(<DataUsaParm>"measures","Population");

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