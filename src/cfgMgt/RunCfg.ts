export class RunCfg {


    private static instance: RunCfg;

    public static getInstance(): RunCfg {
        if (!RunCfg.instance) {
            this.instance = new RunCfg();
        }
        return RunCfg.instance;
    }

    public envBaseUrl(): string {
        return "http://localhost";
    }
}