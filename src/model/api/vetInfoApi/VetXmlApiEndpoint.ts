import {HttpApiEndpoint} from "../HttpApiEndpoint";

export class VetXmlApiEndpoint extends HttpApiEndpoint {
    httpMethod = "GET";
    basePath = "/vets.xml";
    parms: Map<string, any>;
}