import {ApiEndpoint} from "../model/api/ApiEndpoint";

export abstract class HttpApiEndpoint implements ApiEndpoint {

    abstract parms: Map<string, any>;
    abstract httpMethod: string;
    abstract basePath: string;
    port: string = "8080";

    getHeaders(): any {
        return undefined;
    }

    getData(): any {
        return undefined;
    }

    getPath(): string {
        return this.basePath;
    }

    urlParmMap(): string {
        let pathToReturn = `${this.basePath}?`;
        this.parms.forEach((value,key) => {
            pathToReturn = `${pathToReturn}${key}=${value}&`;
        })
        // trim the final &
        pathToReturn = pathToReturn.substring(0,pathToReturn.length-1);
        return pathToReturn;
    }
}