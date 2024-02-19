/**
 * api request parameter
 * extend to a concrete implementation for each api request parameter 
 * and add the corresponding enum to ApiRequestParmType
*/
export abstract class ApiRequestParm {
    abstract parmName: string;
    abstract parmValue: any;

    setVal(val: any): ApiRequestParm {
        this.parmValue = val;
        return this;
    }
}