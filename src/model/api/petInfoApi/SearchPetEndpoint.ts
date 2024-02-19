import {HttpApiEndpoint} from "../../../api/HttpApiEndpoint";

/**
 * example GET http endpoint with params in url
 */
export class SearchPetEndpoint extends HttpApiEndpoint {
    parms = new Map<SearchPetParm, string>();
    httpMethod: "GET";
    basePath: "/pet/search";

    getPath(): string {
       return this.urlParmMap();
    }
}