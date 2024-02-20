import {HttpApiEndpoint} from "../HttpApiEndpoint";
import {RunCfg} from "../../../cfgMgt/RunCfg";

/**
 * example GET http endpoint with params in url
 */
export class DataUsaEndpoint extends HttpApiEndpoint {

    parms = new Map<DataUsaParm, string>();
    httpMethod = "GET";
    basePath = `${RunCfg.getInstance().dataUsaHost()}/api/data`;
    getHeaders(): any {
        return {
            'accept': 'text/html,application/xhtml+xml,application/xml'
        }
    }

    getUrl(): string {
        return`${this.basePath}?${this.urlParmMap()}`;
    }
}