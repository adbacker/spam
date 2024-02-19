export interface ApiEndpoint {
    parms: Map<string,any>;

    getHeaders(): any;
    getData(): any;
    getUrl(): string;
}