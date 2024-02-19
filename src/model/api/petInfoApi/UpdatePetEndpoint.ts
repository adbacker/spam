import {HttpApiEndpoint} from "../../../api/HttpApiEndpoint";

/**
 * example POST http endpoint with params in body
 */
export class UpdatePetEndpoint extends HttpApiEndpoint {
    parms = new Map<UpdatePetParm, string>();
    httpMethod: "POST";
    basePath: "/pet/update";
    port: "8080"
    getData(): string {
       return this.urlParmMap();
    }
}