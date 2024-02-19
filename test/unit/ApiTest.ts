import {DataUsaEndpoint} from "../../src/model/api/datausa/DataUsaEndpoint";

describe("Api infrastructure tests", () => {

    before(() => {
        // before shiz
    })

    beforeEach(() => {
        // beforeach shiz
    })

    it("GET api endpoint with key/value parameter query string should return properly formatted URL", () => {
        const testMap = new Map<DataUsaParm,string>();
        const measuresVal="MeasuresValHere";
        const drilldownVal = "DrilldownValsHere";

        testMap.set("measures",measuresVal);
        testMap.set("drilldowns",drilldownVal);
        const measuresShouldInclude = `measures=${measuresVal}`;
        const drilldownsShouldInclude = `drilldowns=${drilldownVal}`;

        const due = new DataUsaEndpoint();
        due.parms.set("measures",measuresVal);
        due.parms.set("drilldowns",drilldownVal);

        const getPathVal = due.getUrl();

        expect(getPathVal.includes(measuresShouldInclude), `getPath() return of ${getPathVal} should include ${measuresShouldInclude}`).to.be.true;
        expect(getPathVal.includes(drilldownsShouldInclude), `getPath() return of ${getPathVal} should include ${drilldownsShouldInclude}`).to.be.true;
    })

    it("GET api endpoint with key/value parameter query string should return properly formatted URL with parameters having identical values", () => {
        const testMap = new Map<DataUsaParm,string>();
        const measuresVal="dupDataUseParmVal";
        const drilldownVal = "dupDataUseParmVal";

        testMap.set("measures",measuresVal);
        testMap.set("drilldowns",drilldownVal);
        const measuresShouldInclude = `measures=${measuresVal}`;
        const drilldownsShouldInclude = `drilldowns=${drilldownVal}`;

        const due = new DataUsaEndpoint();
        due.parms.set("measures",measuresVal);
        due.parms.set("drilldowns",drilldownVal);

        const getPathVal = due.getUrl();

        expect(getPathVal.includes(measuresShouldInclude), `getPath() return of ${getPathVal} should include ${measuresShouldInclude}`).to.be.true;
        expect(getPathVal.includes(drilldownsShouldInclude), `getPath() return of ${getPathVal} should include ${drilldownsShouldInclude}`).to.be.true;
    })
})
