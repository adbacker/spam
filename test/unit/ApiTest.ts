import { SearchPetEndpoint } from "../../src/model/api/petInfoApi/SearchPetEndpoint";

describe("Api infrastructure tests", () => {


    before(() => {
        // before shiz
    })

    beforeEach(() => {
        // beforeach shiz
    })

    it("searchPetEndpoint should return properly formatted url when all parms configured", () => {
        const testMap = new Map<SearchPetParm,string>();
        testMap.set("animalType","animalTypeValue");
        testMap.set("color","colorTypeValue");
        testMap.set("petName","petNameValue");
        const formEndpoint = new SearchPetEndpoint();
        formEndpoint.parms = testMap;

        const getPathVal = formEndpoint.getPath();

        const animalShouldInclude = "animalType=animalTypeValue";
        const colorShouldInclude = "color=colorTypeValue";
        const petNameShouldInclude = "petName=petNameValue";
        expect(getPathVal.includes(animalShouldInclude), `getPath() return of ${getPathVal} should include ${animalShouldInclude}`).to.be.true;
        expect(getPathVal.includes(colorShouldInclude), `getPath() return of ${getPathVal} should include ${colorShouldInclude}`).to.be.true;
        expect(getPathVal.includes(petNameShouldInclude), `getPath() return of ${getPathVal} should include ${petNameShouldInclude}`).to.be.true;
    })

    it("searchPetEndpoint should return properly formatted url when only some parms configured", () => {
        const testMap = new Map<SearchPetParm,string>();
        testMap.set("animalType","animalTypeValue");
        testMap.set("color","colorTypeValue");
        const formEndpoint = new SearchPetEndpoint();
        formEndpoint.parms = testMap;
        const getPathVal = formEndpoint.getPath();

        const animalShouldInclude = "animalType=animalTypeValue";
        const colorShouldInclude = "color=colorTypeValue";

        expect(getPathVal.includes(animalShouldInclude), `getPath() return of ${getPathVal} should include ${animalShouldInclude}`).to.be.true;
        expect(getPathVal.includes(colorShouldInclude), `getPath() return of ${getPathVal} should include ${colorShouldInclude}`).to.be.true;
        expect(getPathVal.includes("petName"), `getPath() return of ${getPathVal} should NOT include "petName}`).to.be.false;


        // debugger
    })

    it("will searchPetEndpoint should return properly formatted url when some parms configured with dup values", () => {
        const testMap = new Map<SearchPetParm,string>();
        testMap.set("animalType","animalTypeValue");
        testMap.set("color","dupValue");
        testMap.set("petName","dupValue");
        const formEndpoint = new SearchPetEndpoint();
        formEndpoint.parms = testMap;
        const getPathVal = formEndpoint.getPath();


        const animalShouldInclude = "animalType=animalTypeValue";
        const colorShouldInclude = "color=dupValue";
        const petNameShouldInclude = "petName=dupValue";
        expect(getPathVal.includes(animalShouldInclude), `getPath() return of ${getPathVal} should include ${animalShouldInclude}`).to.be.true;
        expect(getPathVal.includes(colorShouldInclude), `getPath() return of ${getPathVal} should include ${colorShouldInclude}`).to.be.true;
        expect(getPathVal.includes(petNameShouldInclude), `getPath() return of ${getPathVal} should include ${petNameShouldInclude}`).to.be.true;
        // debugger
    })
})
