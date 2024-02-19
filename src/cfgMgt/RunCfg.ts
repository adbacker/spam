export class RunCfg {


    private static instance: RunCfg;

    public static getInstance(): RunCfg {
        if (!RunCfg.instance) {
            this.instance = new RunCfg();
        }
        return RunCfg.instance;
    }

    /**
     * vet api uses the vet clinic app
     * demos call without parameters, casting return to business object
     */
    public vetBaseUrl(): string {
        return "http://localhost";
    }

    /**
     * zip lookup
     *
     * demo of parameters built as part of the url path
     *
     * api.zippopotam.us/country/state/city
     * Example: api.zippopotam.us/us/ma/belmont
     */
    public zipBaseUrl(): string {
        return "http://api.zippopotam.us"
    }

    /**
     * datausa: US population info
     * demo of GET call with parameters appended to URL
     *
     * curl 'https://datausa.io/api/data?drilldowns=Nation&measures=Population' \
     *   -H 'accept: text/html,application/xhtml+xml,application/xml'
     */
    public dataUsaHost(): string {
        return "https://datausa.io"
    }






}