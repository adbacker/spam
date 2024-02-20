import {ApiRequestParm} from "../../model/api/depricated/ApiRequestParm";

/**
 * @description utility methods for converting an array of
 * ApiRequestParameter into an arbitrary json object suitable
 * for using as an http call body
 */
export class ApiRequestParser {

    static toMap(parms: ApiRequestParm[]): Map<string, string> {
        const parmMap = new Map();
        parms.forEach(requestParm => {
            parmMap.set(requestParm.parmName, requestParm.parmValue);
        });
        return parmMap;
    }

    /**
     * @description convert an array of parms into a json object
     * that has the parmName as key and parmValue as the value
     * @param parms
     */
    static parmsToJsonPayload(parms: ApiRequestParm[]): any {
        const parmMap = ApiRequestParser.toMap(parms);
        const requestBody = {};
        parmMap.forEach((value,key) => {
            requestBody[key] = value;
        });
        return requestBody;
    }
}