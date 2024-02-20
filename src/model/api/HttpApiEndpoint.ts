import {ApiEndpoint} from "./ApiEndpoint";

export abstract class HttpApiEndpoint implements ApiEndpoint {

    abstract parms: Map<string, any>;
    abstract httpMethod: string;
    abstract basePath: string;

    getHeaders(): any {
        return undefined;
    }

    getData(): any {
        return undefined;
    }

    getUrl(): string {
        return this.basePath;
    }

    urlParmMap(): string {
        let pathToReturn = "";
        this.parms.forEach((value,key) => {
            pathToReturn = `${pathToReturn}${key}=${value}&`;
        })
        // trim the final &
        pathToReturn = pathToReturn.substring(0,pathToReturn.length-1);
        return pathToReturn;
    }
}