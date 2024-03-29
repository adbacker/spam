import {HttpApiEndpoint} from "../HttpApiEndpoint";

export class VetInfoJsonEndpoint extends HttpApiEndpoint {
    parms: Map<string, any>;
    httpMethod = "GET";
    basePath = "/vets.json";
}