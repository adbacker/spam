/**
 * api request parameter
 * can be found by string or parmType enum
 */
export abstract class ApiRequestParm {
    abstract parmName: string;
    abstract parmValue: any;

    setVal(val: any): ApiRequestParm {
        this.parmValue = val;
        return this;
    }
}