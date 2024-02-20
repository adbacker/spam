import {ApiCall} from "../model/api/ApiCall";
import {ApiCallMgr} from "./ApiCallMgr";
import {HttpApiClient} from "./HttpApiClient";
import {HttpApiEndpoint} from "../model/api/HttpApiEndpoint";

export abstract class HttpApiCallMgr extends ApiCallMgr {
    endpoint: HttpApiEndpoint;
    client: HttpApiClient;
    abstract call: ApiCall;

    constructor(endpoint: HttpApiEndpoint) {
        super();
        this.endpoint = endpoint;
        return this;
    }
    submit<T>(): Cypress.Chainable<T>
    {
        if (undefined === this.endpoint) {
            throw new Error("you tried to call an api but I don't have an endpoint to call")
        }
        this.client = new HttpApiClient(this.endpoint);

        // @ts-ignore
        return this.client.execute()
        .then( response => {
            this.call.response = response;
            return this.call as typeof this.call;
        })
    }
}