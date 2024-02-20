import {ApiClient} from "./ApiClient";
import {HttpCallCfg} from "../model/api/HttpCallCfg";
import {HttpApiEndpoint} from "../model/api/HttpApiEndpoint";

/**
 * Basic HttpApiClient implementation
 */
export class HttpApiClient extends ApiClient {

    endpoint: HttpApiEndpoint;
    public execute(): Cypress.Chainable{

        const apiCallObj = new HttpCallCfg();
        apiCallObj.failOnStatusCode = false;
        apiCallObj.method = this.endpoint.httpMethod;

        const basePath = this.endpoint.basePath;
        const path = this.endpoint.getUrl();

        apiCallObj.url = `${this.endpoint.getUrl()}`;

        if(this.endpoint.getHeaders()) {
            apiCallObj.headers = this.endpoint.getHeaders()
        }
        if(this.endpoint.getData()) {
            apiCallObj.body = this.endpoint.getData();
        }

        // @ts-ignore
        return cy.request(apiCallObj)
        .then( response => {
            // do handle-error-y-stuff
            return response.body;
        })
    }

}