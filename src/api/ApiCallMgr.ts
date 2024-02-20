import {ApiCall} from "../model/api/ApiCall";
import {ApiEndpoint} from "../model/api/ApiEndpoint";
import {ApiClient} from "./ApiClient";

/**
 * Single point of contact for tests
 * Test shouldn't need to touch anything but the ApiCallMgr
 */
export abstract class ApiCallMgr {

    abstract endpoint: ApiEndpoint;
    abstract client: ApiClient;
    abstract call: ApiCall;
    
    addParm(key: string, value: any) {
        this.endpoint.parms.set(key,value);
    }

    abstract submit<T>(call: ApiCall): Cypress.Chainable<T>;
}