import {RunCfg} from "../cfgMgt/RunCfg";
import {ApiEndpoint} from "../model/api/ApiEndpoint";

/**
 * ApiClient handles routing business object through encoding, calling, parsing, and returning
 * 
 */
export abstract class ApiClient {
    rc: RunCfg;
    endpoint: ApiEndpoint;

    constructor(endpoint: ApiEndpoint) {
        this.rc = RunCfg.getInstance();
        this.endpoint = endpoint;
    }

    abstract execute(): any;



    
}