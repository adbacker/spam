export interface ApiEndpoint {
    parms: Map<string,any>;

    getHeaders(): any;
    getData(): any;
    getPath(): string;
}